"use client";

import { Children, useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Espacio entre tarjetas antes de apilarse (px del diseño). */
  espacio: number;
  /** Cuánto se asoma cada tarjeta por arriba de la siguiente una vez apiladas (px del diseño). */
  asoma: number;
  className?: string;
};

// Tarjetas que se apilan al hacer scroll: la sección queda fija, cada tarjeta nueva sube
// y se acomoda adelante de la anterior dejando ver "asoma" px. Cuando llega la última,
// el bloque sigue bajando con el resto de la página. Funciona también dentro de <Lienzo>
// (la escala se mide sola), porque solo mueve las tarjetas con transform.
export default function Apilado({ children, espacio, asoma, className = "" }: Props) {
  const lista = useRef<HTMLDivElement>(null);
  const items = useRef<(HTMLDivElement | null)[]>([]);
  const hijos = Children.toArray(children);

  useEffect(() => {
    const el = lista.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const acomodar = () => {
      raf = 0;
      const tarjetas = items.current.filter(Boolean) as HTMLDivElement[];
      const n = tarjetas.length;
      if (!n || !el.offsetHeight) return;
      const r = el.getBoundingClientRect();
      const k = r.height / el.offsetHeight || 1; // escala del lienzo
      const L = r.top / k; // borde superior de la lista, en px del diseño
      const vh = window.innerHeight / k;
      const ultima = tarjetas[n - 1];
      const altoPila = asoma * (n - 1) + ultima.offsetHeight;
      const T = Math.max(24 / k, (vh - altoPila) / 2); // la pila queda centrada en pantalla
      const llegada = T + asoma * (n - 1) - ultima.offsetTop; // L en que llega la última
      const desfase = Math.min(0, L - llegada);
      tarjetas.forEach((t, i) => {
        const natural = L + t.offsetTop;
        const fija = T + asoma * i + desfase;
        const y = L > llegada ? Math.max(natural, fija) : fija;
        t.style.transform = `translate3d(0, ${y - natural}px, 0)`;
      });
    };
    const pedir = () => {
      if (!raf) raf = requestAnimationFrame(acomodar);
    };
    acomodar();
    window.addEventListener("scroll", pedir, { passive: true });
    window.addEventListener("resize", pedir);
    return () => {
      window.removeEventListener("scroll", pedir);
      window.removeEventListener("resize", pedir);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [asoma, hijos.length]);

  return (
    <div ref={lista} className={`relative flex flex-col ${className}`} style={{ gap: espacio }}>
      {hijos.map((h, i) => (
        <div
          key={i}
          ref={(n) => {
            items.current[i] = n;
          }}
          className="relative will-change-transform"
          style={{ zIndex: i + 1 }}
        >
          {h}
        </div>
      ))}
    </div>
  );
}
