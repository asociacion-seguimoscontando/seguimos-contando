/* eslint-disable @next/next/no-img-element */

// Fotos de "Nuestros protagonistas" y la tarjeta que las muestra (compu y celular).
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

