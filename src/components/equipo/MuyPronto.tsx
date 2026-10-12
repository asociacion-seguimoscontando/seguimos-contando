import Revelar from "../Revelar";
import { TarjetaBorrosa } from "./Tarjeta";
import { INTEGRANTES } from "@/lib/equipo";

// Versión "Muy pronto vas a conocer a todo el equipo" (equipo todavía sin publicar).
export default function MuyPronto() {
  return (
    <div className="absolute left-0 top-0 h-[997px] w-[1512px] overflow-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[233px] h-[524px] w-[1612px] -translate-x-1/2 overflow-clip blur-[27px]"
      >
        <div className="absolute left-[-514px] top-1/2 flex -translate-y-1/2 items-start justify-center gap-[50px]">
          {INTEGRANTES.map((p) => (
            <TarjetaBorrosa key={p.nombre} p={p} />
          ))}
        </div>
      </div>

      <Revelar className="absolute left-1/2 top-[418px] flex -translate-x-1/2 flex-col items-center gap-[20px] text-center">
        <div className="flex flex-col items-center justify-center gap-[8px] whitespace-nowrap text-crema drop-shadow-[0_0_24.5px_black]">
          <h1 className="font-expanded text-[59.015px] font-medium leading-normal">
            Muy pronto vas a conocer
          </h1>
          <p className="font-hand text-[94px] leading-normal">a todo el equipo</p>
        </div>
        <p className="font-expanded w-0 min-w-full text-[26px] leading-normal tracking-[-0.78px] text-white">
          Estamos preparando esta sección para presentarte a las personas que hacen posible Seguimos Contando.
        </p>
      </Revelar>

      <div className="absolute left-[756px] top-[355px] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-[76px] leading-normal tracking-[-2.28px] text-black [text-shadow:2.739px_2.739px_17.117px_rgba(0,0,0,0.15)]">
        👀
      </div>
    </div>
  );
}
