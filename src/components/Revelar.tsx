"use client";

import { useEffect, useRef, useState } from "react";

// Hace que su contenido aparezca (fade + slide-in) cuando entra en pantalla.
export default function Revelar({
  children,
  className = "",
  retraso = 0,
  desde = "abajo",
}: {
  children: React.ReactNode;
  className?: string;
  retraso?: number;
  /** Desde dónde entra el contenido. */
  desde?: "abajo" | "izquierda" | "derecha";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<"ssr" | "oculto" | "visto">("ssr");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.95 && r.bottom > 0) {
      setEstado("visto");
      return;
    }
    setEstado("oculto");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setEstado("visto");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dir = desde === "abajo" ? "" : ` revelar-${desde}`;
  const clase =
    estado === "ssr" ? "" : estado === "oculto" ? `revelar${dir}` : `revelar${dir} visto`;

  return (
    <div
      ref={ref}
      className={`${clase} ${className}`}
      style={retraso ? { transitionDelay: `${retraso}s` } : undefined}
    >
      {children}
    </div>
  );
}
