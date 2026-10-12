/* eslint-disable @next/next/no-img-element */
import Recorte from "../Recorte";
import Revelar from "../Revelar";
import { FORM_HISTORIA_URL, LEGISLATURA_URL } from "@/lib/site";

function Etiqueta({
  texto,
  className,
  caja,
}: {
  texto: string;
  className: string;
  caja: string;
}) {
  return (
    <div className={`pointer-events-none absolute flex items-center justify-center ${className}`}>
      <div className="-rotate-[18.04deg]">
        <div className={`rounded-[110px] border border-white bg-[#fbb22c] px-[23.194px] py-[6.958px] ${caja}`}>
          <p className="font-expanded whitespace-nowrap text-[18.556px] font-medium tracking-[-1.8556px] text-white">
            {texto}
          </p>
        </div>
      </div>
    </div>
  );
}

function Tarjeta({
  href,
  src,
  nombre,
  children,
}: {
  href: string;
  src: string;
  nombre: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={nombre}
      className="group relative flex min-w-px flex-1 flex-col rounded-[22px] drop-shadow-[10px_10px_32.5px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className="relative h-[353px] w-full overflow-hidden rounded-[20px]">
        <img
          src={src}
          alt=""
          className="pointer-events-none absolute inset-0 size-full max-w-none object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {children}
    </a>
  );
}

export default function MasProyectos() {
  return (
    <>
      <div className="absolute left-[calc(50%+0.5px)] top-[2884px] flex -translate-x-1/2 flex-col items-center gap-[12px]">
        <p className="font-expanded whitespace-nowrap text-center text-[75px] font-medium leading-normal text-[#e77f22]">
          Más proyectos donde
        </p>
        <Recorte
          src="/img/proyectos/logo-seguimos.png"
          alt="Seguimos Contando"
          className="h-[55px] w-[861px] shrink-0"
          ajuste={{ alto: 260.67, ancho: 116.94, arriba: -79.78, izquierda: -8.47 }}
        />
      </div>

      <div className="absolute left-[100px] top-[3083px] flex w-[1312px] gap-[40px]">
        <Revelar className="flex min-w-px flex-1 [&>a]:w-full">
          <Tarjeta href={LEGISLATURA_URL} src="/img/proyectos/legislatura.png" nombre="Mención en la Legislatura porteña (video)">
            <Etiqueta texto="VIDEO" className="left-[-26px] top-[-12px] h-[69.891px] w-[120.839px]" caja="" />
          </Tarjeta>
        </Revelar>
        <Revelar className="flex min-w-px flex-1 [&>a]:w-full" retraso={0.15}>
          <Tarjeta href={FORM_HISTORIA_URL} src="/img/proyectos/historia.png" nombre="La historia de… (formulario)">
            <Etiqueta texto="FORMULARIO" className="left-[-26px] top-[-22px] h-[93.741px] w-[194.052px]" caja="" />
          </Tarjeta>
        </Revelar>
      </div>
    </>
  );
}
