"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Recorte from "./Recorte";
import { NAV_LINKS, RUTAS } from "@/lib/site";

// "naranja" es la variante de Nuestros proyectos (fondo amarillo).
export default function Nav({ tema = "crema" }: { tema?: "crema" | "naranja" }) {
  const naranja = tema === "naranja";
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);

  const esActivo = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="absolute inset-x-0 top-[25px] z-30 px-4">
      <nav
        aria-label="Principal"
        className={`mx-auto flex w-full max-w-[1312px] items-center justify-between rounded-[100px] border-[0.5px] py-[12.5px] pl-[44.5px] pr-[18.5px] ${
          naranja
            ? "border-[#e77f22]/50"
            : "border-white/50 bg-azul/30 backdrop-blur-[10px]"
        }`}
      >
        <Link href={RUTAS.inicio} aria-label="Seguimos Contando, ir al inicio">
          <Recorte
            src={naranja ? "/img/logo-nav-naranja.png" : "/img/logo-nav.png"}
            alt="Asociación Civil Seguimos Contando"
            className="h-[36px] w-[98px] shrink-0"
            ajuste={
              naranja
                ? { alto: 99.59, ancho: 105.54, arriba: 0.21, izquierda: -2.99 }
                : { alto: 106.88, ancho: 113.27, arriba: -3.44, izquierda: -6.63 }
            }
          />
        </Link>

        <ul className="hidden items-center gap-[10px] lg:flex">
          {NAV_LINKS.map((l) => {
            const activo = esActivo(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={activo ? "page" : undefined}
                  className={`font-expanded relative block rounded-[100px] px-[16px] py-[10px] text-[14px] tracking-[-0.28px] ${
                    naranja ? "text-[#e77f22]" : "text-crema"
                  } ${activo ? "font-bold" : "font-medium"}`}
                >
                  {l.label}
                  {activo && (
                    <span className={`absolute -bottom-[3px] left-1/2 h-[3px] w-[33px] -translate-x-1/2 rounded-full ${naranja ? "bg-[#e77f22]" : "bg-crema"}`} />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href={RUTAS.colaborar}
          className={`font-expanded hidden rounded-[100px] px-[22px] py-[12px] text-[16px] font-semibold tracking-[-0.16px] lg:block ${
            naranja ? "bg-[#e77f22] text-white" : "bg-crema text-azul"
          }`}
        >
          Quiero colaborar
        </Link>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          className={`font-expanded rounded-[100px] px-[18px] py-[10px] text-[14px] font-semibold lg:hidden ${
            naranja ? "bg-[#e77f22] text-white" : "bg-crema text-azul"
          }`}
        >
          {abierto ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {abierto && (
        <div
          id="menu-movil"
          className={`mx-auto mt-2 flex max-w-[1312px] flex-col gap-1 rounded-[28px] border-[0.5px] p-4 backdrop-blur-[10px] lg:hidden ${
            naranja
              ? "border-[#e77f22]/50 bg-[#fdd163]/95"
              : "border-white/50 bg-azul/90"
          }`}
        >
          {[...NAV_LINKS, { href: RUTAS.colaborar, label: "Quiero colaborar" }].map(
            (l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setAbierto(false)}
                className={`font-expanded rounded-[100px] px-4 py-3 text-[15px] ${
                  naranja ? "text-[#e77f22]" : "text-crema"
                } ${esActivo(l.href) ? "bg-white/10 font-bold" : "font-medium"}`}
              >
                {l.label}
              </Link>
            ),
          )}
        </div>
      )}
    </header>
  );
}
