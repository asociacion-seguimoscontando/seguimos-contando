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
      <p className="font-hand text-[32px] uppercase leading-normal">{titulo}</p>
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

export default function Footer() {
  return (
    <footer className="relative mt-[100px] min-h-[584px] w-full">
      {/* Papel rasgado */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[584px] shadow-[0px_-20px_115px_0px_rgba(0,0,0,0.35)]">
        <Recorte
          src="/img/footer-papel.png"
          className="h-full w-full"
          ajuste={{ alto: 179.96, ancho: 105.6, arriba: -24.31, izquierda: -2.74 }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1312px] flex-col gap-[40px] px-6 pb-[60px] pt-[150px] lg:pt-[172px]">
        <div className="grid gap-x-[65px] gap-y-10 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto]">
          <div className="flex max-w-[371px] flex-col gap-[16px] sm:col-span-2 lg:col-span-1">
            <Recorte
              src="/img/logo-footer.png"
              alt="Asociación Civil Seguimos Contando"
              className="h-[60px] w-[163px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.15)]"
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
