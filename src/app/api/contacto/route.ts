import { NextResponse } from "next/server";
import {
  FORMULARIOS,
  esPerfil,
  normalizar,
  validar,
  type Respuestas,
} from "@/lib/formularios";

const MAX_BYTES = 20_000;

export async function POST(req: Request) {
  const texto = await req.text();
  if (texto.length > MAX_BYTES) {
    return NextResponse.json({ ok: false, error: "demasiado_grande" }, { status: 413 });
  }

  let body: { soy?: unknown; respuestas?: unknown; website?: unknown };
  try {
    body = JSON.parse(texto);
  } catch {
    return NextResponse.json({ ok: false, error: "json_invalido" }, { status: 400 });
  }

  // Trampa para bots (campo oculto "website"): se descarta en silencio.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!esPerfil(body.soy)) {
    return NextResponse.json({ ok: false, error: "perfil_invalido" }, { status: 400 });
  }
  const formulario = FORMULARIOS[body.soy];
  const respuestas = (
    body.respuestas && typeof body.respuestas === "object" ? body.respuestas : {}
  ) as Respuestas;

  const errores = validar(formulario, respuestas);
  if (Object.keys(errores).length > 0) {
    return NextResponse.json({ ok: false, error: "validacion", errores }, { status: 422 });
  }

  const { columnas, valores } = normalizar(formulario, respuestas);

  const url = process.env.GOOGLE_SCRIPT_URL;
  const secreto = process.env.GOOGLE_SCRIPT_SECRET;

  if (!url || !secreto) {
    if (process.env.NODE_ENV !== "production") {
      // En desarrollo, sin planilla conectada: se muestra lo que se enviaría.
      console.warn("[contacto] Planilla sin configurar. Datos recibidos:", {
        hoja: formulario.hoja,
        columnas,
        valores,
      });
      return NextResponse.json({ ok: true, guardado: false });
    }
    console.error("[contacto] Faltan GOOGLE_SCRIPT_URL / GOOGLE_SCRIPT_SECRET");
    return NextResponse.json({ ok: false, error: "no_configurado" }, { status: 503 });
  }

  try {
    const r = await fetch(url, {
      method: "POST",
      // text/plain evita el preflight de CORS que Apps Script no responde.
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ secret: secreto, hoja: formulario.hoja, columnas, valores }),
      redirect: "follow",
      cache: "no-store",
    });
    const data = (await r.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (!r.ok || !data?.ok) {
      console.error("[contacto] Falló Apps Script:", r.status, data?.error);
      return NextResponse.json({ ok: false, error: "planilla" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, guardado: true });
  } catch (e) {
    console.error("[contacto] No se pudo contactar a Apps Script:", e);
    return NextResponse.json({ ok: false, error: "planilla" }, { status: 502 });
  }
}
