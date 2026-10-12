"use client";

import { useEffect, useState } from "react";
import Revelar from "../Revelar";
import Copiar from "./Copiar";
import { MERCADOPAGO_URL, MP_ALIAS, MP_CVU } from "@/lib/site";

type Modo = "pesos" | "internacional";

function DatoMovil({ etiqueta, valor, copiar }: { etiqueta: string; valor: string; copiar: boolean }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-[18px] border-2 border-[#d9d1c4] bg-[rgba(240,240,240,0.2)] p-4">
      <div className="font-expanded flex min-w-px flex-1 flex-col gap-1 text-crema">
        <p className="text-[14px] tracking-[-0.8px]">{etiqueta}</p>
        <p className="text-[15px] leading-tight tracking-[-0.6px]" style={{ wordBreak: "break-all" }}>
          {valor}
        </p>
      </div>
      {copiar ? (
        <div className="shrink-0 [&>button]:min-w-[104px] [&>button]:px-3 [&>button]:py-3 [&>button]:text-[13px]">
          <Copiar texto={valor} etiqueta={etiqueta} />
        </div>
      ) : (
        <div className="font-expanded flex min-w-[104px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-azul-footer px-3 py-3 text-[13px] font-semibold text-white">
          COPIAR
        </div>
      )}
    </div>
  );
}

function PanelMovil({ modo }: { modo: Modo }) {
  const pesos = modo === "pesos";
  return (
    <div className="rounded-[24px] border border-white/20 bg-white/10 px-4 py-7 shadow-[5px_5px_40px_0px_rgba(0,0,0,0.05)] backdrop-blur-[4px]">
      <div className="flex flex-col items-center gap-5 text-center text-crema">
        <div
          className={`font-expanded rounded-full border px-4 py-1.5 text-[15px] font-medium tracking-[-1.2px] ${
            pesos ? "border-[#00b1ea] bg-[#b2ecff] text-[#00b1ea]" : "border-[#44bc3e] bg-[#abf2a7] text-[#44bc3e]"
          }`}
        >
          {pesos ? "MERCADO PAGO" : "MONEDA INTERNACIONAL"}
        </div>
        <div className="font-expanded flex flex-col gap-2">
          <p className="text-[21px] font-semibold leading-tight tracking-[-1.5px]">Doná con QR, alias o CVU</p>
          <p className="text-[15px] leading-snug tracking-[-0.8px]">
            Escaneá el código desde la app de Mercado Pago o copiá el alias/CVU para transferir.
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        {pesos ? (
          <a
            href={MERCADOPAGO_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Código QR para donar por Mercado Pago"
            className="relative block size-[220px] rounded-[20px] border-2 border-white bg-white/5"
          >
            <div className="absolute inset-[14px] flex items-center justify-center rounded-[12px] bg-crema p-[10px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/colaborar/qr-mercadopago.svg" alt="QR de Mercado Pago de Seguimos Contando" className="size-full" />
            </div>
          </a>
        ) : (
          <div className="relative size-[220px] rounded-[20px] border-2 border-white bg-white/5">
            <div className="absolute inset-[14px] rounded-[12px] bg-crema" />
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <DatoMovil etiqueta="Alias" valor={MP_ALIAS} copiar={pesos} />
        <DatoMovil etiqueta="CVU" valor={MP_CVU} copiar={pesos} />
      </div>

      {pesos ? (
        <a
          href={MERCADOPAGO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-expanded mt-6 flex h-[58px] w-full items-center justify-center rounded-[16px] bg-[#00b1ea] text-[17px] font-semibold text-white active:scale-[0.98]"
        >
          Abrir Mercado Pago →
        </a>
      ) : (
        <div className="font-expanded mt-6 flex h-[58px] w-full items-center justify-center rounded-[16px] bg-[#44bc3e] text-[17px] font-semibold text-white">
          Abrir Arq (Dolar App) →
        </div>
      )}
    </div>
  );
}

// Quiero colaborar para celular (< 1024 px).
export default function ColaborarMovil() {
  const [modo, setModo] = useState<Modo>("pesos");

  useEffect(() => {
    if (window.location.hash !== "#internacional") return;
    const t = setTimeout(() => setModo("internacional"));
    return () => clearTimeout(t);
  }, []);

  function elegir(m: Modo) {
    setModo(m);
    try {
      history.replaceState(null, "", m === "internacional" ? "#internacional" : window.location.pathname);
    } catch {
      /* sin historial disponible */
    }
  }

  const pestana = (m: Modo, texto: string) => (
    <button
      type="button"
      role="tab"
      aria-selected={modo === m}
      onClick={() => elegir(m)}
      className={`font-expanded h-[54px] w-full rounded-[11px] border border-crema px-4 text-left text-[16px] font-medium text-crema transition-colors ${
        modo === m ? "bg-crema/15" : "bg-transparent"
      }`}
    >
      {texto}
    </button>
  );

  return (
    <div
      className="relative overflow-x-clip bg-azul-footer bg-[length:100%_auto] px-4 pb-16 pt-[140px] text-crema"
      style={{ backgroundImage: "url(/img/movil/azul-textura.webp)" }}
    >
      <Revelar className="flex flex-col items-center gap-4 px-2 text-center">
        <h1 className="font-expanded text-[34px] font-semibold leading-[1.1] tracking-[-0.3px]">
          Quiero <span className="font-hand text-[48px] font-normal">Colaborar</span>
        </h1>
        <p className="font-expanded text-[15px] leading-[1.4]">
          Tu aporte sostiene los proyectos de Seguimos Contando. Doná directo por Mercado Pago o contanos cómo te gustaría sumarte.
        </p>
      </Revelar>

      <div role="tablist" aria-label="Forma de donar" className="mt-7 flex flex-col gap-3">
        {pestana("pesos", "Donar pesos argentinos")}
        {pestana("internacional", "Donar moneda internacional")}
      </div>

      <div className="relative mt-7">
        <div
          key={modo}
          className={`fade-up ${modo === "internacional" ? "pointer-events-none select-none blur-[18px]" : ""}`}
          aria-hidden={modo === "internacional" ? true : undefined}
          inert={modo === "internacional"}
        >
          <PanelMovil modo={modo} />
        </div>
        {modo === "internacional" && (
          <div className="fade-up absolute inset-x-2 top-[110px] flex flex-col items-center gap-2 rounded-[22px] bg-azul-footer/75 px-3 py-6 text-center shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <div className="text-[48px] leading-none">👀</div>
            <p className="font-expanded text-[26px] font-medium leading-[1.1] [text-shadow:0_0_30px_rgba(0,0,0,0.53)]">
              Muy pronto vas a poder donar
            </p>
            <p className="font-hand text-[40px] leading-none">con monedas internacionales</p>
          </div>
        )}
      </div>
    </div>
  );
}
