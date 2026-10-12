import Link from "next/link";
import Recorte from "./Recorte";
import {
  FOOTER_COMUNIDAD,
  FOOTER_COPY,
  FOOTER_DESCRIPCION,
  FOOTER_NAV,
  FOOTER_REDES,
} from "@/lib/site";

type Item = { href: string; label: string; externo?: boolean };

function Columna({ titulo, items }: { titulo: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-[15px] text-azul-footer">
      <p className="font-hand text-[32px] uppercase leading-none">{titulo}</p>
      <ul className="font-expanded flex flex-col gap-[12px] text-[19px] font-medium whitespace-nowrap">
        {items.map((i) => (
          <li key={i.label}>
            {i.externo ? (
              <a
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {i.label}
              </a>
            ) : (
              <Link href={i.href} className="hover:underline">
                {i.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterEscritorio() {
  return (
    <footer className="relative mt-[100px] min-h-[584px] w-full">
      {/* Papel rasgado */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[584px] drop-shadow-[0px_-20px_115px_rgba(0,0,0,0.35)]">
        <Recorte
          src="/img/footer-papel.webp"
          className="h-full w-full"
          ajuste={{ alto: 179.96, ancho: 105.6, arriba: -24.31, izquierda: -2.74 }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1312px] flex-col gap-[40px] px-6 min-[1360px]:px-0 pb-[60px] pt-[150px] lg:pt-[172px]">
        <div className="grid gap-x-[65px] gap-y-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto]">
          <div className="flex max-w-[371px] flex-col gap-[16px] sm:col-span-2 lg:col-span-1">
            <Recorte
              src="/img/logo-footer.webp"
              alt="Asociación Civil Seguimos Contando"
              className="h-[60px] w-[163px] drop-shadow-[0px_4px_24px_rgba(0,0,0,0.15)]"
              ajuste={{ alto: 101.38, ancho: 107.65, arriba: -0.63, izquierda: -3.68 }}
            />
            <p className="font-expanded text-[19.169px] tracking-[-0.5751px] text-azul-footer">
              {FOOTER_DESCRIPCION}
            </p>
          </div>
          <Columna titulo="Navegación" items={FOOTER_NAV} />
          <Columna titulo="Comunidad" items={FOOTER_COMUNIDAD} />
          <Columna titulo="Nuestras redes" items={FOOTER_REDES} />
        </div>

        <div className="font-expanded border-t-[1.065px] border-azul-footer/25 pt-[26px] text-center text-[18px] font-medium text-azul-footer">
          {FOOTER_COPY}
        </div>
      </div>
    </footer>
  );
}

function FooterMovil() {
  return (
    <footer className="relative w-full text-azul-footer">
      <div className="[filter:drop-shadow(0_-10px_24px_rgba(0,0,0,0.3))]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/movil/footer-borde.webp" alt="" className="block h-auto w-full" />
        <div
          className="-mt-px bg-[#f6e9d7] bg-[length:100%_auto] px-6 pb-10 pt-4"
          style={{ backgroundImage: "url(/img/movil/papel-textura.webp)" }}
        >
          <Recorte
            src="/img/logo-footer.webp"
            alt="Asociación Civil Seguimos Contando"
            className="h-[52px] w-[141px] drop-shadow-[0px_4px_24px_rgba(0,0,0,0.15)]"
            ajuste={{ alto: 101.38, ancho: 107.65, arriba: -0.63, izquierda: -3.68 }}
          />
          <p className="font-expanded mt-4 max-w-[320px] text-[15px] leading-[1.35] tracking-[-0.3px]">
            {FOOTER_DESCRIPCION}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
            <MovilColumna titulo="Navegación" items={FOOTER_NAV} />
            <MovilColumna titulo="Nuestras redes" items={FOOTER_REDES} />
            <div className="col-span-2">
              <MovilColumna titulo="Comunidad" items={FOOTER_COMUNIDAD} />
            </div>
          </div>

          <p className="font-expanded mt-9 border-t border-azul-footer/25 pt-5 text-center text-[13px] font-medium leading-[1.4]">
            {FOOTER_COPY}
          </p>
        </div>
      </div>
    </footer>
  );
}

function MovilColumna({ titulo, items }: { titulo: string; items: Item[] }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-hand text-[28px] uppercase leading-none">{titulo}</p>
      <ul className="font-expanded flex flex-col gap-2.5 text-[15px] font-medium leading-tight">
        {items.map((i) => (
          <li key={i.label}>
            {i.externo ? (
              <a href={i.href} target="_blank" rel="noopener noreferrer" className="active:underline">
                {i.label}
              </a>
            ) : (
              <Link href={i.href} className="active:underline">
                {i.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <div className="max-md:hidden">
        <FooterEscritorio />
      </div>
      <div className="md:hidden">
        <FooterMovil />
      </div>
    </>
  );
}
