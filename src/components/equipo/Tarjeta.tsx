/* eslint-disable @next/next/no-img-element */
import type { Integrante } from "@/lib/equipo";

const FOTO_BASE = "/img/equipo/silueta.png";

// Foto + degradé + nombre / rol / descripción (340x524 en el diseño).
function Contenido({
  p,
  borroso,
}: {
  p: Integrante;
  borroso?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-end overflow-clip rounded-[30px] p-[20px] ${
        borroso ? "h-[504px] w-[320px]" : "h-full min-w-px flex-[1_0_0] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.1)]"
      }`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 rounded-[30px]">
        <img
          src={p.foto ?? FOTO_BASE}
          alt=""
          className="absolute size-full max-w-none rounded-[30px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(to_bottom,rgba(20,20,20,0)_50%,#141414_100%)]" />
      </div>
      <div className="relative flex w-full flex-col items-center gap-[10px] text-center">
        <div className="flex w-full flex-col items-center gap-[3px]">
          <p className="font-expanded w-full text-[21px] font-semibold leading-[25px] text-white">
            {p.nombre}
          </p>
          <p className="font-hand w-full text-[29px] leading-none text-[#fbb22c]">{p.rol}</p>
        </div>
        <p
          className={
            borroso
              ? "w-full text-[18px] leading-[24px] tracking-[-0.54px] text-white"
              : "font-expanded w-full text-[15px] leading-[18px] text-white"
          }
        >
          {p.descripcion}
        </p>
      </div>
    </div>
  );
}

export default function Tarjeta({ p }: { p: Integrante }) {
  return (
    <article className="group flex h-[524px] w-[340px] shrink-0 items-center rounded-[30px] drop-shadow-[10px_10px_32.5px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out hover:-translate-y-2">
      <Contenido p={p} />
    </article>
  );
}

// Versión "Muy pronto": marco blanco, se ve desenfocada detrás del cartel.
export function TarjetaBorrosa({ p }: { p: Integrante }) {
  return (
    <div className="group flex shrink-0 items-center rounded-[30px] bg-white p-[10px] drop-shadow-[4px_4px_12.5px_rgba(0,0,0,0.1)]">
      <Contenido p={p} borroso />
    </div>
  );
}
