"use client";

import { useEffect, useState } from "react";
import Revelar from "../Revelar";
import Copiar from "./Copiar";
import { MERCADOPAGO_URL, MP_ALIAS, MP_CVU } from "@/lib/site";

type Modo = "pesos" | "internacional";

function Pestana({
  activa,
  ancho,
  onClick,
  children,
}: {
  activa: boolean;
  ancho: number;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={activa}
      onClick={onClick}
      style={{ width: ancho }}
      className={`font-expanded h-[70px] cursor-pointer whitespace-nowrap rounded-[11.915px] border border-crema py-[22px] pl-[21px] pr-[21px] text-left text-[23.83px] font-medium transition-colors duration-300 ${
        activa ? "bg-crema text-azul" : "text-crema hover:bg-crema/10"
      }`}
    >
      {children}
    </button>
  );
}

function Dato({
  etiqueta,
  valor,
  tamano,
  copiar,
  espacio,
  esCvu,
}: {
  etiqueta: string;
  valor: string;
  tamano: string;
  copiar: boolean;
  espacio: string;
  esCvu?: boolean;
}) {
  return (
    <div
      className={`flex w-full items-center rounded-[25px] border-2 border-[#d9d1c4] bg-[rgba(240,240,240,0.2)] p-[25px] ${espacio}`}
    >
      <div className="font-expanded flex min-w-px flex-[1_0_0] flex-col gap-[10px] text-crema">
        <p className="text-[18px] leading-[normal] tracking-[-1.8px]">{etiqueta}</p>
        <p
          className={`leading-[normal] ${tamano} ${esCvu ? "tracking-[-2px]" : ""}`}
          style={{ wordBreak: "break-all" }}
        >
          {valor}
        </p>
      </div>
      {copiar ? <Copiar texto={valor} etiqueta={etiqueta} /> : (
        <div className="font-expanded flex w-[128px] shrink-0 items-center justify-center rounded-[100px] bg-azul-footer px-[24px] py-[15px] text-[16px] font-semibold tracking-[-0.16px] text-white">
          COPIAR
        </div>
      )}
    </div>
  );
}

// Panel de Mercado Pago. En "internacional" es el mismo panel, desenfocado y sin interacción.
function Panel({ modo }: { modo: Modo }) {
  const pesos = modo === "pesos";
  return (
    <div className="relative h-[771px] w-[1312px] rounded-[30px] border border-white/20 bg-white/10 shadow-[5px_5px_40px_0px_rgba(0,0,0,0.05)] backdrop-blur-[4px]">
      <div className="absolute left-[80px] top-[60px] flex h-[521px] w-[1152px] flex-col">
        <div className="flex flex-col items-center gap-[40px]">
          <div
            className={`font-expanded flex items-center justify-center rounded-[110px] border px-[24px] py-[10px] text-[24px] font-medium tracking-[-2.4px] ${
              pesos
                ? "border-[#00b1ea] bg-[#b2ecff] text-[#00b1ea]"
                : "border-[#44bc3e] bg-[#abf2a7] text-[#44bc3e]"
            }`}
          >
            {pesos ? "MERCADO PAGO" : "MONEDA INTERNACIONAL"}
          </div>
          <div className="font-expanded flex w-full flex-col items-center gap-[12px] text-center text-crema">
            <p className="w-full text-[30px] font-semibold leading-[normal] tracking-[-3px]">
              Doná con QR, alias o CVU
            </p>
            <p className="w-full text-[22px] leading-[normal] tracking-[-2.2px]">
              Escaneá el código desde la app de Mercado Pago o copiá el alias/CVU para transferir.
            </p>
          </div>
        </div>

        <div className="absolute left-0 top-[197px] flex h-[324px] w-[1152px]">
          {/* QR */}
          {pesos ? (
            <a
              href={MERCADOPAGO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Código QR para donar por Mercado Pago"
              className="group relative block size-[324px] shrink-0 rounded-[25px] border-2 border-white bg-white/5 transition-transform duration-300 hover:scale-[1.03]"
            >
              <div className="absolute inset-[20px] flex items-center justify-center rounded-[14px] bg-crema p-[14px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/colaborar/qr-mercadopago.svg"
                  alt="QR de Mercado Pago de Seguimos Contando"
                  className="size-full"
                />
              </div>
            </a>
          ) : (
            <div className="relative size-[324px] shrink-0 rounded-[25px] border-2 border-white bg-white/5">
              <div className="absolute inset-[20px] rounded-[14px] bg-crema" />
            </div>
          )}

          <div className="absolute left-[384px] top-[47.5px] flex w-[768px] flex-col gap-[15px]">
            <Dato etiqueta="Alias" valor={MP_ALIAS} tamano="text-[22px]" copiar={pesos} espacio="gap-[84px]" />
            <Dato etiqueta="CVU" valor={MP_CVU} tamano="text-[20px]" copiar={pesos} espacio="gap-[40px]" esCvu />
          </div>
        </div>
      </div>

      {pesos ? (
        <a
          href={MERCADOPAGO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-expanded absolute left-[80px] top-[641px] flex h-[70px] w-[1152px] items-center justify-center rounded-[20px] bg-[#00b1ea] p-[24px] text-[20px] font-semibold tracking-[-0.2px] text-white drop-shadow-[4px_4px_15px_rgba(0,0,0,0.05)] transition-[transform,filter] duration-300 hover:scale-[1.01] hover:brightness-110"
        >
          Abrir Mercado Pago →
        </a>
      ) : (
        <div className="font-expanded absolute left-[80px] top-[641px] flex h-[70px] w-[1152px] items-center justify-center rounded-[20px] bg-[#44bc3e] p-[24px] text-[20px] font-semibold tracking-[-0.2px] text-white">
          Abrir Arq (Dolar App) →
        </div>
      )}
    </div>
  );
}

export default function Colaborar() {
  const [modo, setModo] = useState<Modo>("pesos");

  // Permite entrar directo con /colaborar#internacional
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

  return (
    <div className="absolute left-0 top-0 h-[1526px] w-[1512px] overflow-clip">
      <Revelar className="absolute left-[264px] top-[173px] flex w-[980px] flex-col items-center gap-[40px]">
        <div className="flex w-full flex-col items-center gap-[20px] text-center text-crema">
          <h1 className="font-expanded w-full text-[70px] font-semibold leading-[85.8px] tracking-[-0.5px]">
            Quiero <span className="font-hand text-[90px] font-normal">Colaborar</span>
          </h1>
          <p className="font-expanded w-full text-[26px] leading-[34px]">
            Tu aporte sostiene los proyectos de Seguimos Contando. Doná directo por Mercado Pago o contanos cómo te gustaría sumarte.
          </p>
        </div>
        <div role="tablist" aria-label="Forma de donar" className="flex items-center gap-[20px]">
          <Pestana activa={modo === "pesos"} ancho={370} onClick={() => elegir("pesos")}>
            Donar pesos argentinos
          </Pestana>
          <Pestana activa={modo === "internacional"} ancho={430} onClick={() => elegir("internacional")}>
            Donar moneda internacional
          </Pestana>
        </div>
      </Revelar>

      <Revelar className="absolute left-[100px] top-[521px]" retraso={0.15}>
        <div
          key={modo}
          className={`fade-up ${modo === "internacional" ? "pointer-events-none select-none blur-[33px]" : ""}`}
          aria-hidden={modo === "internacional" ? true : undefined}
          inert={modo === "internacional"}
        >
          <Panel modo={modo} />
        </div>
      </Revelar>

      {modo === "internacional" && (
        <>
          <div className="fade-up absolute left-[759px] top-[871px] flex w-[1007px] -translate-x-1/2 flex-col items-center gap-[8px] whitespace-nowrap text-center text-crema">
            <p className="font-expanded text-[59.015px] font-medium leading-[normal] [text-shadow:0_0_40px_rgba(0,0,0,0.53)]">
              Muy pronto vas a poder donar
            </p>
            <p className="font-hand text-[94px] leading-none">con monedas internacionales</p>
          </div>
          <div className="fade-up absolute left-[759px] top-[808px] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-[76px] leading-[normal] tracking-[-2.28px] text-black [text-shadow:2.739px_2.739px_17.117px_rgba(0,0,0,0.15)]">
            👀
          </div>
        </>
      )}
    </div>
  );
}
