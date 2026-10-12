"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  FORMULARIOS,
  PERFILES,
  esPerfil,
  validar,
  type Campo,
  type Perfil,
  type Respuestas,
} from "@/lib/formularios";

const TEMAS = {
  crema: { borde: "border-crema", texto: "text-crema" },
  blanco: { borde: "border-white", texto: "text-white" },
} as const;

function leerPerfilGuardado(): Perfil | null {
  const m = document.cookie.match(/(?:^|; )soy=([^;]+)/);
  const v = m ? decodeURIComponent(m[1]) : null;
  return esPerfil(v) ? v : null;
}

export default function ContactoForm() {
  const params = useSearchParams();
  const delParam = params.get("soy");
  const [guardado, setGuardado] = useState<Perfil | null>(null);
  const [elegido, setElegido] = useState<Perfil | null>(null);

  // El perfil elegido en la home queda guardado en una cookie ("soy").
  useEffect(() => {
    const t = setTimeout(() => setGuardado(leerPerfilGuardado()));
    return () => clearTimeout(t);
  }, []);

  const conocido: Perfil | null = esPerfil(delParam) ? delParam : guardado;
  const perfil: Perfil = conocido ?? elegido ?? "intergeneracional";

  return (
    <Tarjeta
      key={perfil}
      perfil={perfil}
      editable={!conocido}
      onCambiarPerfil={setElegido}
    />
  );
}

type TarjetaProps = {
  perfil: Perfil;
  editable: boolean;
  onCambiarPerfil: (p: Perfil) => void;
};

function Tarjeta({ perfil, editable, onCambiarPerfil }: TarjetaProps) {
  const formulario = FORMULARIOS[perfil];
  const tema = TEMAS[formulario.tema];

  const [valores, setValores] = useState<Respuestas>({});
  const [errores, setErrores] = useState<Record<string, string>>({});
  const [estado, setEstado] = useState<"libre" | "enviando" | "ok" | "error">("libre");
  const [trampa, setTrampa] = useState("");

  const claseInput = `font-expanded w-full rounded-[8px] border border-solid ${tema.borde} bg-[rgba(244,230,208,0.1)] p-[14px] text-[16px] font-medium text-white placeholder:text-[#ddd] focus:outline-none focus:ring-2 focus:ring-crema/60`;
  const claseEtiqueta = `font-expanded text-[17px] font-semibold leading-[22px] ${tema.texto}`;

  function cambiar(nombre: string, valor: string) {
    setValores((v) => ({ ...v, [nombre]: valor }));
    if (errores[nombre]) setErrores((e) => ({ ...e, [nombre]: "" }));
  }

  function alternarChip(nombre: string, opcion: string) {
    setValores((v) => {
      // Una sola opción: elegir otra reemplaza a la anterior; tocar la misma la desmarca.
      const actuales = Array.isArray(v[nombre]) ? (v[nombre] as string[]) : [];
      const nuevas = actuales.includes(opcion) ? [] : [opcion];
      return { ...v, [nombre]: nuevas };
    });
  }

  async function enviar(e: FormEvent) {
    e.preventDefault();
    if (estado === "enviando") return;

    const encontrados = validar(formulario, valores);
    if (Object.keys(encontrados).length > 0) {
      setErrores(encontrados);
      return;
    }

    setEstado("enviando");
    try {
      const r = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ soy: perfil, respuestas: valores, website: trampa }),
      });
      const data = (await r.json().catch(() => ({}))) as { ok?: boolean };
      if (!r.ok || !data.ok) throw new Error("envio");
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  }

  return (
    <section
      aria-labelledby="titulo-formulario"
      className="w-full max-w-[634px] rounded-[30px] bg-white/10 p-6 shadow-[5px_5px_40px_0px_rgba(0,0,0,0.05)] sm:p-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[514px] flex-col gap-[40px]">
        <div className="flex flex-col items-center gap-[40px]">
          <div className="rounded-[110px] border border-solid border-azul bg-crema px-[24px] py-[10px]">
            <p className="font-expanded text-[18.556px] font-medium tracking-[-1.8556px] text-azul">
              FORMULARIO
            </p>
          </div>
          <h2
            id="titulo-formulario"
            className={`font-expanded text-center text-[26px] font-semibold tracking-[-3px] sm:text-[30px] sm:leading-[33px] ${tema.texto}`}
          >
            {estado === "ok" ? "¡Gracias por escribirnos!" : "Contanos cómo querés sumarte"}
          </h2>
        </div>

        {estado === "ok" ? (
          <div className="flex flex-col items-center gap-[30px] text-center">
            <p className={`font-expanded text-[17px] font-medium leading-[26px] ${tema.texto}`}>
              Recibimos tus datos. Te vamos a contactar pronto.
            </p>
            <button
              type="button"
              onClick={() => {
                setValores({});
                setErrores({});
                setEstado("libre");
              }}
              className="font-expanded rounded-[20px] bg-crema px-[24px] py-[15px] text-[16px] font-semibold tracking-[-0.16px] text-azul"
            >
              Enviar otra respuesta
            </button>
          </div>
        ) : (
          <form onSubmit={enviar} noValidate className="flex flex-col gap-[60px]">
            <div className="flex flex-col gap-[15px]">
              {/* Soy: viene de la home; si no se eligió, se puede elegir acá */}
              <div className="flex flex-col gap-[10px]">
                <label htmlFor="campo-soy" className={claseEtiqueta}>
                  Soy:
                </label>
                {editable ? (
                  <select
                    id="campo-soy"
                    value={perfil}
                    onChange={(e) => onCambiarPerfil(e.target.value as Perfil)}
                    className="font-expanded w-full rounded-[8px] border border-solid border-[#a7a7a7] bg-[#dfdfdf] p-[14px] text-[16px] font-medium text-[#555] focus:outline-none focus:ring-2 focus:ring-crema/60"
                  >
                    {PERFILES.map((p) => (
                      <option key={p} value={p}>
                        {FORMULARIOS[p].etiquetaSoy}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    id="campo-soy"
                    readOnly
                    value={formulario.etiquetaSoy}
                    className="font-expanded w-full rounded-[8px] border border-solid border-[#a7a7a7] bg-[#dfdfdf] p-[14px] text-[16px] font-medium text-[#a0a0a0] focus:outline-none"
                  />
                )}
              </div>

              {formulario.campos.map((c) => (
                <CampoForm
                  key={c.nombre}
                  campo={c}
                  valor={valores[c.nombre]}
                  error={errores[c.nombre]}
                  claseInput={claseInput}
                  claseEtiqueta={claseEtiqueta}
                  temaBorde={tema.borde}
                  onTexto={cambiar}
                  onChip={alternarChip}
                />
              ))}
            </div>

            {/* Trampa para bots: las personas no la ven ni la completan */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={trampa}
              onChange={(e) => setTrampa(e.target.value)}
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            <div className="flex flex-col gap-[15px]">
              {estado === "error" && (
                <p role="alert" className="font-expanded text-center text-[15px] font-medium text-[#ffb3b3]">
                  No pudimos enviar tus datos. Probá de nuevo en unos minutos.
                </p>
              )}
              <button
                type="submit"
                disabled={estado === "enviando"}
                className="font-expanded h-[69px] w-full rounded-[20px] bg-crema px-[24px] py-[15px] text-[16px] font-semibold tracking-[-0.16px] text-azul drop-shadow-[4px_4px_15px_rgba(0,0,0,0.05)] transition disabled:opacity-70"
              >
                {estado === "enviando" ? "Enviando…" : "Enviar Datos →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

type CampoProps = {
  campo: Campo;
  valor: string | string[] | undefined;
  error?: string;
  claseInput: string;
  claseEtiqueta: string;
  temaBorde: string;
  onTexto: (nombre: string, valor: string) => void;
  onChip: (nombre: string, opcion: string) => void;
};

function CampoForm({
  campo,
  valor,
  error,
  claseInput,
  claseEtiqueta,
  temaBorde,
  onTexto,
  onChip,
}: CampoProps) {
  const id = `campo-${campo.nombre}`;
  const texto = typeof valor === "string" ? valor : "";
  const requerido = campo.tipo === "texto" && campo.requerido;

  const etiqueta = (
    <>
      {campo.etiqueta}
      {requerido && <span className="text-rojo">*</span>}
    </>
  );

  if (campo.tipo === "chips") {
    const elegidas = Array.isArray(valor) ? valor : [];
    return (
      <fieldset className="flex flex-col gap-[10px]">
        <legend className={`${claseEtiqueta} mb-[10px]`}>{etiqueta}</legend>
        <div role="radiogroup" className="flex flex-wrap gap-[10px]">
          {campo.opciones.map((o) => {
            const activa = elegidas.includes(o);
            return (
              <button
                key={o}
                type="button"
                role="radio"
                aria-checked={activa}
                onClick={() => onChip(campo.nombre, o)}
                className={`font-expanded rounded-[8px] border border-solid p-[14px] text-[16px] font-medium transition ${
                  activa
                    ? "border-crema bg-crema text-azul"
                    : `${temaBorde} bg-[rgba(244,230,208,0.1)] text-[#ddd]`
                }`}
              >
                {o}
              </button>
            );
          })}
        </div>
      </fieldset>
    );
  }

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor={id} className={claseEtiqueta}>
        {etiqueta}
      </label>
      {campo.tipo === "area" ? (
        <textarea
          id={id}
          value={texto}
          placeholder={campo.placeholder}
          onChange={(e) => onTexto(campo.nombre, e.target.value)}
          maxLength={3000}
          className={`${claseInput} min-h-[148px] resize-y px-[19px]`}
        />
      ) : (
        <input
          id={id}
          type={campo.entrada === "email" ? "email" : "text"}
          inputMode={campo.entrada === "numero" ? "numeric" : undefined}
          value={texto}
          placeholder={campo.placeholder}
          onChange={(e) => onTexto(campo.nombre, e.target.value)}
          maxLength={1000}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={claseInput}
        />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="font-expanded text-[14px] font-medium text-[#ffb3b3]">
          {error}
        </p>
      )}
    </div>
  );
}
