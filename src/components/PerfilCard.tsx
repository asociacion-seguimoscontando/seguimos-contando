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
      className="fade-up flex min-w-0 flex-1 flex-col items-center justify-center gap-[6px] rounded-[22px] border border-white/50 bg-white/10 px-[25px] py-[70px] backdrop-blur-[2px] transition hover:bg-white/20 active:bg-white/20 max-lg:gap-0 max-lg:py-[26px]"
      style={{ animationDelay: `${retraso}s` }}
    >
      <span className="font-expanded text-[33px] text-white max-lg:text-[24px]">
        SOY
      </span>
      {/* 41px en compu; en pantallas más angostas se achica para que "ORGANIZACIÓN / EMPRESA"
          entre siempre en una sola línea. */}
      <span className="font-hand whitespace-nowrap text-center text-[min(41px,calc(3.4vw-8px))] leading-[1.1] text-white max-lg:text-[min(34px,8.6vw)] max-lg:leading-none">
        {label}
      </span>
    </Link>
  );
}
