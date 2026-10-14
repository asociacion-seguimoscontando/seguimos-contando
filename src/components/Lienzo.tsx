"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { FooterDiseno } from "./Footer";

const ALTO_FOOTER = 584;

type Props = {
  /** Ancho del diseño en Figma (px). */
  ancho?: number;
  /** Alto del diseño en Figma (px), sin contar el footer. */
  alto: number;
  children: React.ReactNode;
  /** false = no recortar lo que sobresale (sombras). */
  recortar?: boolean;
  /**
   * Si se indica, el footer se dibuja dentro del lienzo (escala igual que la página)
   * y se superpone esa cantidad de px sobre el final del contenido, como en Figma.
   */
  pie?: number;
  /** Fondo que continúa debajo del papel roto del footer (CSS background). */
  fondoPie?: string;
};

// Lienzo de diseño: mantiene las medidas exactas de Figma y las escala al ancho
// de la pantalla, así lo que se ve es proporcionalmente igual al diseño.
export default function Lienzo({ ancho = 1512, alto, children, recortar = true, pie, fondoPie }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [k, setK] = useState(1);
  const conPie = pie !== undefined;
  const topPie = conPie ? alto - pie : 0;
  const total = conPie ? topPie + ALTO_FOOTER : alto;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const medir = () => setK(el.clientWidth / ancho);
    medir();
    const ro = new ResizeObserver(medir);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ancho]);

  return (
    <div ref={ref} className="w-full" style={{ ["--k" as string]: k }}>
      <div className={`relative w-full ${recortar ? "overflow-hidden" : ""}`} style={{ height: total * k }}>
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: ancho, height: total, transform: `scale(${k})` }}
        >
          {conPie && fondoPie && (
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 w-full"
              style={{ top: topPie, height: ALTO_FOOTER, background: fondoPie }}
            />
          )}
          {children}
          {conPie && <FooterDiseno top={topPie} />}
        </div>
      </div>
    </div>
  );
}
