/* eslint-disable @next/next/no-img-element */
import Recorte from "../Recorte";

// Hero del Inicio: video de fondo + overlay #000000 al 40% + degradé + logo y frase.
export default function Hero() {
  return (
    <div className="absolute left-0 top-0 h-[747px] w-[1512px] overflow-clip">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/inicio.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      {/* Overlay #000000 al 40% (requisito del cliente) */}
      <div aria-hidden className="absolute inset-0 bg-[#000000]/40" />
      {/* Degradé inferior del Figma */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent from-[53.414%] to-[rgba(0,0,0,0.5)] to-[91.499%]"
      />

      <a
        href="#quienes-somos"
        aria-label="Ir a ¿Quiénes somos?"
        className="absolute left-[733px] top-[479px] block h-[89px] w-[45px]"
      >
        <img
          src="/img/inicio/hero-flecha.svg"
          alt=""
          className="rebote absolute inset-0 block size-full max-w-none"
        />
      </a>

      <div className="absolute left-1/2 top-[calc(50%-68.5px)] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[25px]">
        <Recorte
          src="/img/inicio/hero-logo.webp"
          alt="Asociación Civil Seguimos Contando"
          className="h-[96px] w-[900px]"
          ajuste={{ alto: 314.61, ancho: 100, arriba: -107.31, izquierda: 0 }}
        />
        <div className="relative h-0 w-[900px]">
          <img
            src="/img/inicio/hero-linea.svg"
            alt=""
            className="absolute inset-[-2px_0_0_0] block size-full max-w-none"
          />
        </div>
        <h1 className="font-expanded whitespace-nowrap text-center text-[38px] font-medium text-crema">
          <span className="block">Conectamos generaciones para construir</span>
          <span className="block">una sociedad para todas las edades.</span>
        </h1>
      </div>
    </div>
  );
}
