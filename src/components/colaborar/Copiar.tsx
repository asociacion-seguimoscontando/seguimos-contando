"use client";

import { useEffect, useRef, useState } from "react";

// Botón "COPIAR": copia el texto y avisa unos segundos.
export default function Copiar({ texto, etiqueta }: { texto: string; etiqueta: string }) {
  const [copiado, setCopiado] = useState(false);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (t.current) clearTimeout(t.current);
  }, []);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
    } catch {
      // Respaldo para navegadores sin permiso de portapapeles
      const ta = document.createElement("textarea");
      ta.value = texto;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* nada más que hacer */
      }
      document.body.removeChild(ta);
    }
    setCopiado(true);
    if (t.current) clearTimeout(t.current);
    t.current = setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copiar}
      aria-label={`Copiar ${etiqueta}`}
      className="font-expanded flex min-w-[128px] shrink-0 items-center justify-center whitespace-nowrap rounded-[100px] bg-azul-footer px-[24px] py-[15px] text-[16px] font-semibold tracking-[-0.16px] text-white drop-shadow-[4px_4px_15px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      <span aria-live="polite">{copiado ? "COPIADO ✓" : "COPIAR"}</span>
    </button>
  );
}
