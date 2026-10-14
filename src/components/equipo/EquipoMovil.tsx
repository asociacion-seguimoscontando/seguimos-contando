import Recorte from "../Recorte";
import Revelar from "../Revelar";
import Lienzo from "../Lienzo";
import Carrusel from "../movil/Carrusel";
import Tarjeta, { TarjetaBorrosa } from "./Tarjeta";
import { INTEGRANTES } from "@/lib/equipo";
import { EQUIPO_PUBLICADO } from "@/lib/site";

// Nuestro equipo para celular (< 1024 px).
export default function EquipoMovil() {
  return (
    <div
      className="relative overflow-x-clip bg-azul-footer bg-[length:100%_auto] pb-20 pt-[120px] text-crema"
      style={{ backgroundImage: "url(/img/movil/azul-textura-continua.webp)" }}
    >
      {EQUIPO_PUBLICADO ? (
        <>
          <Revelar className="flex flex-col items-center gap-3 px-6 text-center">
            <h1 className="font-expanded text-[28px] font-medium leading-[1.15]">Nosotros somos el detrás de</h1>
            <Recorte
              src="/img/equipo/logo-titulo.webp"
              alt="Seguimos Contando"
              className="aspect-[836/59] w-full"
              ajuste={{ alto: 511.91, ancho: 108.13, arriba: -237.31, izquierda: -4.07 }}
            />
            <p className="font-expanded mt-2 text-[15px] leading-[1.4] tracking-[-0.3px]">
              Somos un equipo interdisciplinario que trabaja con pasión y compromiso para construir una sociedad más inclusiva, accesible e intergeneracional.
            </p>
          </Revelar>
          <Carrusel className="mt-10" ancho="min(78%, 320px)" espacio={14} intervalo={4000} color="#edddc9">
            {INTEGRANTES.map((p) => (
              <div key={p.nombre} className="py-3">
                <Lienzo ancho={340} alto={524} recortar={false}>
                  <Tarjeta p={p} />
                </Lienzo>
              </div>
            ))}
          </Carrusel>
        </>
      ) : (
        <div className="relative">
          {/* Tarjetas desenfocadas (más grandes y algo oscurecidas para que el texto se lea bien) */}
          <div aria-hidden className="pointer-events-none overflow-hidden py-6 [filter:blur(18px)_brightness(0.7)]">
            <div className="-ml-[90px] flex w-max gap-6" style={{ zoom: 0.78 }}>
              {INTEGRANTES.slice(0, 4).map((p) => (
                <TarjetaBorrosa key={p.nombre} p={p} />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="text-[48px] leading-none">👀</div>
            <h1 className="font-expanded text-[28px] font-medium leading-[1.1] [text-shadow:0_0_24px_rgba(0,0,0,0.85)]">
              Muy pronto vas a conocer
              <span className="font-hand block text-[48px] font-normal leading-none">a todo el equipo</span>
            </h1>
            <p className="font-expanded text-[15px] leading-[1.4] text-white [text-shadow:0_0_14px_rgba(0,0,0,0.9)]">
              Estamos preparando esta sección para presentarte a las personas que hacen posible Seguimos Contando.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
