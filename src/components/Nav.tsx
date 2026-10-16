"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Recorte from "./Recorte";
import { NAV_LINKS, RUTAS } from "@/lib/site";

// "naranja" es la variante de Nuestros proyectos (fondo amarillo).
export default function Nav({ tema = "crema" }: { tema?: "crema" | "naranja" }) {
  const naranja = tema === "naranja";
  const pathname = usePathname();
  const [abierto, setAbierto] = useState(false);
  // En Nuestros proyectos el header arranca transparente y pasa a vidrio al scrollear.
  const [scrolleado, setScrolleado] = useState(false);

  useEffect(() => {
    if (!naranja) return;
    const alScrollear = () => setScrolleado(window.scrollY > 10);
    alScrollear();
    window.addEventListener("scroll", alScrollear, { passive: true });
    return () => window.removeEventListener("scroll", alScrollear);
  }, [naranja]);

  const esActivo = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    // Fijo arriba al hacer scroll (compu y celular).
    <header className="fixed inset-x-0 top-[25px] z-40 px-4">
      <nav
        aria-label="Principal"
        className={`mx-auto flex w-full max-w-[1312px] items-center justify-between rounded-[100px] border-[0.5px] py-[12.5px] pl-[44.5px] pr-[18.5px] transition-[background-color,backdrop-filter] duration-300 ${
          naranja
            ? `border-[#e77f22]/50 ${scrolleado ? "bg-[#fdd163]/40 backdrop-blur-[10px]" : "bg-transparent backdrop-blur-0"}`
            : "border-white/50 bg-azul/30 backdrop-blur-[10px]"
        }`}
      >
        <Link href={RUTAS.inicio} aria-label="Seguimos Contando, ir al inicio">
          <Recorte
            src={naranja ? "/img/logo-nav-naranja.webp" : "/img/logo-nav.webp"}
            alt="Asociación Civil Seguimos Contando"
            className="h-[36px] w-[98px] shrink-0"
            ajuste={
              naranja
                ? { alto: 99.59, ancho: 105.54, arriba: 0.21, izquierda: -2.99 }
                : { alto: 106.88, ancho: 113.27, arriba: -3.44, izquierda: -6.63 }
            }
          />
        </Link>

        <ul className="hidden items-center gap-[6px] lg:flex">
          {NAV_LINKS.map((l) => {
            const activo = esActivo(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={activo ? "page" : undefined}
                  className={`group font-expanded relative block rounded-[100px] px-[16px] py-[10px] text-[14px] tracking-[-0.28px] ${
                    naranja ? "text-[#e77f22]" : "text-crema"
                  }`}
                >
                  {/* La copia invisible en negrita reserva el ancho: al pasar el mouse
                      la letra pasa a bold y crece 2px sin correr a los demás links. */}
                  <span className="inline-grid">
                    <span aria-hidden className="invisible col-start-1 row-start-1 font-bold">
                      {l.label}
                    </span>
                    <span
                      className={`col-start-1 row-start-1 text-center transition-[font-weight,transform] duration-200 ease-out group-hover:scale-[1.1429] group-hover:font-bold ${
                        activo ? "font-bold" : "font-medium"
                      }`}
                    >
                      {l.label}
                    </span>
                  </span>
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
          className={`font-expanded hidden rounded-[100px] px-[22px] py-[12px] text-[16px] font-semibold tracking-[-0.16px] transition-[margin,padding,box-shadow] duration-200 ease-out hover:-m-[2px] hover:px-[24px] hover:py-[14px] hover:shadow-[0px_6px_20px_rgba(0,0,0,0.25)] lg:block ${
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
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          className={`relative -mr-[6px] flex size-[44px] items-center justify-center lg:hidden ${
            naranja ? "text-[#e77f22]" : "text-crema"
          }`}
        >
          {/* Hamburguesa: 3 líneas que se convierten en una X */}
          <span aria-hidden className="relative block h-[16px] w-[24px]">
            <span
              className={`absolute left-0 block h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                abierto ? "top-[7px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${
                abierto ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                abierto ? "top-[7px] -rotate-45" : "top-[14px]"
              }`}
            />
          </span>
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
          {NAV_LINKS.map((l) => (
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
          ))}
          {/* Remarcado como el botón de compu */}
          <Link
            href={RUTAS.colaborar}
            onClick={() => setAbierto(false)}
            className={`font-expanded mt-2 rounded-[100px] px-4 py-3 text-center text-[15px] font-semibold tracking-[-0.15px] shadow-[0px_6px_20px_rgba(0,0,0,0.2)] active:scale-[0.98] ${
              naranja ? "bg-[#e77f22] text-white" : "bg-crema text-azul"
            }`}
          >
            Quiero colaborar
          </Link>
        </div>
      )}
    </header>
  );
}
