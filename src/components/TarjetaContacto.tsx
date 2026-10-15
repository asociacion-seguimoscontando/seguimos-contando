/* eslint-disable @next/next/no-img-element */

type Props = {
  href: string;
  marco: string; // SVG con el borde dibujado a mano
  etiqueta: string;
  accion: string;
  etiquetaNegrita?: boolean;
  externo?: boolean;
  icono: React.ReactNode;
};

// Tarjeta de contacto (WhatsApp / email / LinkedIn) del lado derecho.
export default function TarjetaContacto({
  href,
  marco,
  etiqueta,
  accion,
  etiquetaNegrita = false,
  externo = false,
  icono,
}: Props) {
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="relative block h-[166px] w-full transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="absolute inset-[-0.6%_-0.17%]">
        <img src={marco} alt="" className="block size-full max-w-none" />
      </div>
      {icono}
      <div className="absolute inset-x-0 top-[71px] flex flex-col items-center gap-[9px] px-4 text-center text-crema">
        <p
          className={`font-expanded max-w-full px-2 [overflow-wrap:anywhere] text-[16px] max-sm:text-[12.5px] ${
            etiquetaNegrita ? "font-semibold" : "font-medium"
          }`}
        >
          {etiqueta}
        </p>
        <p className="font-expanded text-[22px] font-medium italic max-sm:text-[min(19px,5.3vw)]">{accion}</p>
      </div>
    </a>
  );
}
