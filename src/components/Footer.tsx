import Link from "next/link";
import Recorte from "./Recorte";
import Lienzo from "./Lienzo";
import {
  FOOTER_COMUNIDAD,
  FOOTER_COPY,
  FOOTER_CREDITO,
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

function Credito() {
  return (
    <>
      {FOOTER_COPY}
      <a
        href={FOOTER_CREDITO.href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {FOOTER_CREDITO.texto}
      </a>
    </>
  );
}

// Footer de compu con las medidas exactas del Figma (1512 x 584). Va dentro de un
// <Lienzo>, así se escala igual que el resto de la página y ocupa todo el ancho.
export function FooterDiseno({ top = 0 }: { top?: number }) {
  return (
    <footer className="absolute left-0 z-10 h-[584px] w-[1512px]" style={{ top }}>
      {/* Papel rasgado */}
      <div className="pointer-events-none absolute inset-0 drop-shadow-[0px_-20px_115px_rgba(0,0,0,0.35)]">
        <Recorte
          src="/img/footer-papel.webp"
          className="h-full w-full"
          ajuste={{ alto: 179.96, ancho: 105.6, arriba: -24.31, izquierda: -2.74 }}
          modo="figma"
        />
      </div>

      <div className="absolute left-[100px] top-[172px] flex w-[1312px] flex-col gap-[40px]">
        <div className="grid grid-cols-[371px_215px_336px_195px] gap-x-[65px]">
          <div className="flex flex-col gap-[16px]">
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
          <Credito />
        </div>
      </div>
    </footer>
  );
}

function FooterMovil() {
  return (
    // Sube el alto del borde roto: así lo que se ve entre los picos es el papel de la página.
    <footer className="relative z-10 -mt-[8.9vw] w-full text-azul-footer">
      <div className="[filter:drop-shadow(0_-10px_24px_rgba(0,0,0,0.3))]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/movil/footer-borde-continuo.webp" alt="" className="relative z-[1] block h-auto w-full" />
        <div
          className="-mt-[1.2vw] bg-[#f5e6d1] bg-[length:100%_auto] px-6 pb-10 pt-[calc(1.5rem+1.2vw)]"
          style={{ backgroundImage: "url(/img/movil/papel-textura-continua.webp)" }}
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

          {/* Una columna debajo de la otra */}
          <div className="mt-10 flex flex-col gap-9">
            <MovilColumna titulo="Navegación" items={FOOTER_NAV} />
            <MovilColumna titulo="Nuestras redes" items={FOOTER_REDES} />
            <MovilColumna titulo="Comunidad" items={FOOTER_COMUNIDAD} />
          </div>

          <p className="font-expanded mt-9 border-t border-azul-footer/25 pt-5 text-center text-[13px] font-medium leading-[1.4]">
            <Credito />
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

// Footer suelto (páginas que no usan <Lienzo pie>): compu escalada + celular.
export default function Footer({ soloMovil = false }: { soloMovil?: boolean }) {
  return (
    <>
      {!soloMovil && (
        <div className="relative z-10 mt-[100px] max-md:hidden">
          <Lienzo alto={584} recortar={false}>
            <FooterDiseno />
          </Lienzo>
        </div>
      )}
      <div className="md:hidden">
        <FooterMovil />
      </div>
    </>
  );
}
