import Recorte from "../Recorte";
import Revelar from "../Revelar";
import Tarjeta from "./Tarjeta";
import { INTEGRANTES } from "@/lib/equipo";

// Versión con el equipo: título + cinta de tarjetas que avanza sola (se frena al pasar el mouse).
export default function Equipo() {
  return (
    <div className="absolute left-0 top-0 h-[1240px] w-[1512px] overflow-clip">
      <Revelar className="absolute left-1/2 top-[183px] flex -translate-x-1/2 flex-col items-center gap-[20px]">
        <div className="flex flex-col items-center gap-[8px]">
          <h1 className="font-expanded whitespace-nowrap text-center text-[59px] font-medium leading-[normal] text-crema">
            Nosotros somos el detrás de
          </h1>
          <Recorte
            src="/img/equipo/logo-titulo.webp"
            alt="Seguimos Contando"
            className="h-[59px] w-[836px] shrink-0"
            ajuste={{ alto: 511.91, ancho: 108.13, arriba: -237.31, izquierda: -4.07 }}
          />
        </div>
        <p className="font-expanded w-[1020px] text-center text-[26px] leading-[normal] tracking-[-0.78px] text-crema">
          Somos un equipo interdisciplinario que trabaja con pasión y compromiso para construir una sociedad más inclusiva, accesible e intergeneracional.
        </p>
      </Revelar>

      <div className="absolute left-0 top-[476px] h-[524px] w-[1512px]">
        <div
          className="marquee absolute left-[-514px] top-0 flex"
          style={{ ["--dur" as string]: "70s" }}
        >
          {[0, 1].map((copia) => (
            <div
              key={copia}
              className="flex shrink-0 gap-[50px] pr-[50px]"
              aria-hidden={copia === 1 ? true : undefined}
            >
              {INTEGRANTES.map((p) => (
                <Tarjeta key={`${copia}-${p.nombre}`} p={p} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
