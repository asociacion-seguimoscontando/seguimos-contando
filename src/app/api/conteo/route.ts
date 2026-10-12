import { NextResponse } from "next/server";
import { FORMULARIOS, esPerfil } from "@/lib/formularios";

// Suma 1 al contador del perfil elegido en el inicio (pestaña "Conteo" de la planilla).
export async function POST(req: Request) {
  const texto = await req.text();
  if (texto.length > 1_000) {
    return NextResponse.json({ ok: false, error: "demasiado_grande" }, { status: 413 });
  }

  let body: { soy?: unknown };
  try {
    body = JSON.parse(texto);
  } catch {
    return NextResponse.json({ ok: false, error: "json_invalido" }, { status: 400 });
  }
  if (!esPerfil(body.soy)) {
    return NextResponse.json({ ok: false, error: "perfil_invalido" }, { status: 400 });
  }

  const url = process.env.GOOGLE_SCRIPT_URL;
  const secreto = process.env.GOOGLE_SCRIPT_SECRET;
  if (!url || !secreto) {
    // Sin planilla conectada no se rompe nada: simplemente no se cuenta.
    return NextResponse.json({ ok: true, guardado: false });
  }

  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        secret: secreto,
        accion: "contar",
        perfil: FORMULARIOS[body.soy].hoja,
      }),
      redirect: "follow",
      cache: "no-store",
    });
    const data = (await r.json().catch(() => null)) as { ok?: boolean } | null;
    if (!r.ok || !data?.ok) {
      console.error("[conteo] Falló Apps Script:", r.status);
      return NextResponse.json({ ok: false, error: "planilla" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, guardado: true });
  } catch (e) {
    console.error("[conteo] No se pudo contactar a Apps Script:", e);
    return NextResponse.json({ ok: false, error: "planilla" }, { status: 502 });
  }
}
