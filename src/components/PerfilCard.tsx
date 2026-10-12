"use client";

import Link from "next/link";

type Props = {
  slug: string;
  label: string;
  destino: string;
  retraso: number;
};

// Tarjeta "SOY ..." de la home: recuerda el perfil elegido (cookie "soy")
// para que el formulario de Contacto salga autocompletado.
export default function PerfilCard({ slug, label, destino, retraso }: Props) {
  return (
    <Link
      href={destino}
      onClick={() => {
        document.cookie = `soy=${slug}; path=/; max-age=31536000; samesite=lax`;
        // Cuenta el click en la planilla; keepalive permite que termine aunque se cambie de página.
        try {
          fetch("/api/conteo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ soy: slug }),
            keepalive: true,
          }).catch(() => {});
        } catch {
          /* el conteo nunca debe frenar la navegación */
        }
      }}
      className="fade-up flex flex-1 flex-col items-center justify-center gap-[6px] rounded-[22px] border border-white/50 bg-white/10 px-[26px] py-[71px] backdrop-blur-[2px] transition hover:bg-white/20 max-md:gap-0 max-md:py-[26px] active:bg-white/20"
      style={{ animationDelay: `${retraso}s` }}
    >
      <span className="font-expanded -rotate-[5deg] text-[33px] text-white max-md:text-[24px]">
        SOY
      </span>
      <span className="font-hand text-center text-[41px] text-white max-md:leading-none max-md:text-[34px]">
        {label}
      </span>
    </Link>
  );
}
