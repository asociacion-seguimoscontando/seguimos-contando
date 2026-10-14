"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Ancho de cada diapositiva (CSS), por ejemplo "80%" o "300px". */
  ancho?: string;
  /** Espacio entre diapositivas en px. */
  espacio?: number;
  /** Cada cuántos ms avanza sola (0 = no avanza). */
  intervalo?: number;
  /** Color de los puntos. */
  color?: string;
  puntos?: boolean;
  className?: string;
  /** Aire arriba y abajo para que las sombras no queden cortadas por el scroll (px). */
  aire?: number;
};

// Carrusel táctil: se desliza con el dedo, avanza solo y muestra puntos.
export default function Carrusel({
  children,
  ancho = "82%",
  espacio = 16,
  intervalo = 4500,
  color = "#1c5186",
  puntos = true,
  className = "",
  aire = 48,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [actual, setActual] = useState(0);
  const pausa = useRef(0);
  const visible = useRef(false);
  const items = Children.toArray(children);
  const total = items.length;
  // Medidas relativas al ancho del carrusel (cqw), así el centrado es exacto.
  const w = ancho.replace(/%/g, "cqw");

  const ir = useCallback((i: number) => {
    const el = ref.current;
    if (!el) return;
    const hijo = el.children[i] as HTMLElement | undefined;
    if (!hijo) return;
    el.scrollTo({ left: hijo.offsetLeft - (el.clientWidth - hijo.clientWidth) / 2, behavior: "smooth" });
  }, []);

  // Detecta cuál diapositiva está más cerca del centro.
  const alScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const centro = el.scrollLeft + el.clientWidth / 2;
    let mejor = 0;
    let dist = Infinity;
    Array.from(el.children).forEach((c, i) => {
      const h = c as HTMLElement;
      const d = Math.abs(h.offsetLeft + h.clientWidth / 2 - centro);
      if (d < dist) {
        dist = d;
        mejor = i;
      }
    });
    setActual(mejor);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (visible.current = e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    const tocar = () => (pausa.current = Date.now() + 9000);
    el.addEventListener("touchstart", tocar, { passive: true });
    el.addEventListener("pointerdown", tocar, { passive: true });
    return () => {
      io.disconnect();
      el.removeEventListener("touchstart", tocar);
      el.removeEventListener("pointerdown", tocar);
    };
  }, []);

  useEffect(() => {
    if (!intervalo || total < 2) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (!visible.current || Date.now() < pausa.current) return;
      const el = ref.current;
      if (!el) return;
      const siguiente = (Number(el.dataset.i ?? 0) + 1) % total;
      ir(siguiente);
    }, intervalo);
    return () => clearInterval(t);
  }, [intervalo, total, ir]);

  return (
    <div className={className} style={{ containerType: "inline-size" }}>
      <div
        ref={ref}
        data-i={actual}
        onScroll={alScroll}
        className="sin-barra flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
        style={{
          gap: espacio,
          paddingInline: `calc((100cqw - ${w}) / 2)`,
          paddingBlock: aire,
          marginBlock: -aire,
          scrollbarWidth: "none",
        }}
      >
        {items.map((it, i) => (
          <div key={i} className="shrink-0 snap-center" style={{ width: w }}>
            {it}
          </div>
        ))}
      </div>
      {puntos && total > 1 && (
        <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Diapositivas">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === actual}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              onClick={() => {
                pausa.current = Date.now() + 9000;
                ir(i);
              }}
              className="size-2.5 rounded-full transition-all"
              style={{
                background: color,
                opacity: i === actual ? 1 : 0.3,
                transform: i === actual ? "scale(1.25)" : "none",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
