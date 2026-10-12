"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  /** Ancho del diseño en Figma (px). */
  ancho?: number;
  /** Alto total del diseño en Figma (px). */
  alto: number;
  children: React.ReactNode;
  /** Se dibuja debajo del lienzo; recibe la variable CSS --k (escala). */
  despues?: React.ReactNode;
};

// Lienzo de diseño: mantiene las medidas exactas de Figma y las escala al ancho
// de la pantalla, así lo que se ve es proporcionalmente igual al diseño.
export default function Lienzo({ ancho = 1512, alto, children, despues }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [k, setK] = useState(1);

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
      <div className="relative w-full overflow-hidden" style={{ height: alto * k }}>
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: ancho, height: alto, transform: `scale(${k})` }}
        >
          {children}
        </div>
      </div>
      {despues}
    </div>
  );
}
