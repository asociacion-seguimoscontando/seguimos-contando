/* eslint-disable @next/next/no-img-element */

// Cinta de protagonistas: avanza sola, pausa al pasar el mouse.
export const FOTOS: { src: string; capa?: string }[] = [
  { src: "prot-1517.webp" },
  { src: "prot-1513.webp" },
  { src: "prot-1514.webp" },
  { src: "prot-1515.webp", capa: "prot-1517.webp" },
  { src: "prot-1516.webp" },
  { src: "prot-1518.webp" },
  { src: "prot-1519.webp" },
  { src: "prot-1520.webp" },
  { src: "prot-1521.webp" },
];

export function Tarjeta({ src, capa, className = "h-[520px] w-[416px]" }: { src: string; capa?: string; className?: string }) {
  return (
    <div className={`relative ${className} shrink-0 rounded-[24.471px] shadow-[10px_10px_45px_0px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]`}>
      {capa && (
        <img
          src={`/img/inicio/${capa}`}
          alt=""
          className="absolute inset-0 size-full max-w-none rounded-[24.471px] object-cover"
        />
      )}
      <img
        src={`/img/inicio/${src}`}
        alt="Protagonista de Seguimos Contando"
        className="absolute inset-0 size-full max-w-none rounded-[24.471px] object-cover"
      />
    </div>
  );
}

export default function Protagonistas() {
  return (
    <div className="absolute left-0 top-[2077px] flex w-[1512px] flex-col items-center gap-[35px]">
      <h2 className="h-[65px] w-full text-center uppercase leading-[65px] text-azul-footer">
        <span className="font-expanded text-[36px]">Nuestros </span>
        <span className="font-hand text-[65px]">protagonistas</span>
      </h2>
      {/* padding vertical para que no se corten las sombras */}
      <div className="w-full overflow-hidden py-[50px] -my-[50px]">
        <div
          className="marquee flex w-max gap-[48.941px] pr-[48.941px]"
          style={{ ["--dur" as string]: "60s" }}
        >
          {[...FOTOS, ...FOTOS].map((f, i) => (
            <Tarjeta key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}
