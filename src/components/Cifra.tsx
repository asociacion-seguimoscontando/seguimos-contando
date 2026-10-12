"use client";

import { useEffect, useRef, useState } from "react";

// Número que "cuenta" desde 0 hasta su valor cuando entra en pantalla.
// Acepta formatos como "21,1K", "+400K", "152K", "33", "+1M".
function partir(texto: string) {
  const m = texto.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!m) return null;
  const [, pre, num, suf] = m;
  const decimales = (num.split(/[.,]/)[1] ?? "").length;
  return { pre, valor: parseFloat(num.replace(",", ".")), decimales, suf };
}

export default function Cifra({ texto }: { texto: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const partes = partir(texto);
  const [valor, setValor] = useState<number | null>(null); // null = mostrar el texto final

  useEffect(() => {
    const el = ref.current;
    if (!el || !partes) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const animar = () => {
      const inicio = performance.now();
      const dur = 1400;
      const paso = (t: number) => {
        const p = Math.min((t - inicio) / dur, 1);
        const suave = 1 - Math.pow(1 - p, 3);
        setValor(partes.valor * suave);
        if (p < 1) raf = requestAnimationFrame(paso);
        else setValor(null);
      };
      setValor(0);
      raf = requestAnimationFrame(paso);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          animar();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texto]);

  if (!partes || valor === null) {
    return <span ref={ref}>{texto}</span>;
  }
  const coma = texto.includes(",") ? "," : ".";
  const num = valor.toFixed(partes.decimales).replace(".", coma);
  return (
    <span ref={ref} aria-label={texto}>
      {partes.pre}
      {num}
      {partes.suf}
    </span>
  );
}
