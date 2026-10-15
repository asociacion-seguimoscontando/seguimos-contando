"use client";

import { useState } from "react";
import { FOTOS, Tarjeta } from "./ProtagonistasDatos";

// Un poco más chicas que en la cinta original (416x520) para que entren 3 + las flechas.
const ANCHO = 384;
const HUECO = 40;
const VISIBLES = 3;

function Flecha({ lado, onClick }: { lado: "izq" | "der"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={lado === "izq" ? "Ver protagonistas anteriores" : "Ver más protagonistas"}
      className="relative z-10 flex size-[64px] shrink-0 items-center justify-center rounded-full bg-azul-footer text-crema shadow-[0px_6px_20px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.08] active:scale-95"
    >
      <svg aria-hidden width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {lado === "izq" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
      </svg>
    </button>
  );
}

// Carrusel de protagonistas: se ven 3 y se corre de a una con las flechas (no avanza solo).
// Al llegar al final vuelve al principio (y al revés).
export default function Protagonistas() {
  const [i, setI] = useState(0);
  const max = FOTOS.length - VISIBLES;
  const mover = (d: number) => setI((v) => (v + d > max ? 0 : v + d < 0 ? max : v + d));

  return (
    <div className="absolute left-0 top-[2077px] flex w-[1512px] flex-col items-center gap-[35px]">
      <h2 className="h-[65px] w-full text-center uppercase leading-[65px] text-azul-footer">
        <span className="font-expanded text-[36px]">Nuestros </span>
        <span className="font-hand text-[65px]">protagonistas</span>
      </h2>
      <div className="flex w-full items-center justify-center gap-[28px]">
        <Flecha lado="izq" onClick={() => mover(-1)} />
        {/* Sin recorte: las fotos que quedan fuera de las 3 visibles se ocultan con opacidad,
            así las sombras se ven enteras (con overflow-hidden quedaba un borde marcado). */}
        <div className="relative" style={{ width: ANCHO * VISIBLES + HUECO * (VISIBLES - 1) }}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ gap: HUECO, transform: `translateX(${-i * (ANCHO + HUECO)}px)` }}
          >
            {FOTOS.map((f, n) => {
              const visible = n >= i && n < i + VISIBLES;
              return (
                <div
                  key={n}
                  aria-hidden={!visible || undefined}
                  className={`shrink-0 transition-opacity duration-500 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
                >
                  <Tarjeta {...f} className="h-[480px] w-[384px]" />
                </div>
              );
            })}
          </div>
        </div>
        <Flecha lado="der" onClick={() => mover(1)} />
      </div>
    </div>
  );
}
