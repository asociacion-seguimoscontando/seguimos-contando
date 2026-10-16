"use client";

import { useLayoutEffect, useRef } from "react";

// Texto de las tarjetas Misión / Visión / Propósito.
// Algunos navegadores internos (por ejemplo el de Instagram) agrandan la letra por su cuenta
// y el texto se salía del papel. Si no entra en el alto disponible, se achica de a 0,5 px
// (como mucho hasta el 70%). Si entra, queda exactamente igual al diseño.
export default function TextoAjustado({
  tamano,
  interlineado,
  maxAlto,
  children,
}: {
  tamano: number;
  interlineado: number;
  maxAlto: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const p = ref.current;
    const caja = p?.parentElement;
    const tarjeta = caja?.parentElement;
    if (!p || !caja || !tarjeta) return;

    const ajustar = () => {
      let t = tamano;
      const poner = () => {
        p.style.fontSize = `${t}px`;
        p.style.lineHeight = `${(interlineado / tamano) * t}px`;
      };
      poner();
      if (!caja.offsetWidth) return; // oculto (la otra versión, compu o celular)
      // Escala real en pantalla (el diseño se achica con transform).
      const escala = caja.getBoundingClientRect().width / caja.offsetWidth;
      while (p.getBoundingClientRect().height > maxAlto * escala + 1 && t > tamano * 0.7) {
        t -= 0.5;
        poner();
      }
    };

    ajustar();
    document.fonts?.ready.then(ajustar);
    const ro = new ResizeObserver(ajustar);
    ro.observe(tarjeta);
    return () => ro.disconnect();
  }, [tamano, interlineado, maxAlto]);

  // max-height evita además el "inflado" automático de letra en navegadores de Android.
  return (
    <p ref={ref} style={{ maxHeight: 999999 }}>
      {children}
    </p>
  );
}
