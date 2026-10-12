/* eslint-disable @next/next/no-img-element */
import Cifra from "../Cifra";
import Recorte from "../Recorte";
import Revelar from "../Revelar";
import PapelMovil from "../movil/Papel";
import Carrusel from "../movil/Carrusel";
import { PERFILES } from "./Acompanamos";
import { CAPTURAS } from "./Comentarios";

const DATOS = [
  { valor: "150K", etiqueta: "Seguidores en Tiktok", nota: "Contenido intergeneracional" },
  { valor: "+400K", etiqueta: "Seguidores en Instagram", nota: "Comunidad digital" },
  { valor: "13,6K", etiqueta: "Seguidores en Spotify", nota: "Comunidad digital" },
  { valor: "152K", etiqueta: "Reproducciones y descargas en Spotify", nota: "Escucha acumulada" },
  { valor: "10", etiqueta: "Alianzas construidas", nota: "Empresas, Instituciones" },
  { valor: "33", etiqueta: "Episodios publicados", nota: "2 temporadas del podcast" },
];

function DatoMovil({
  valor,
  etiqueta,
  nota,
  grande = false,
  children,
}: {
  valor: string;
  etiqueta: string;
  nota: string;
  grande?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Revelar className="flex h-full">
      <div className="relative flex w-full flex-col gap-2 overflow-clip rounded-[20px] bg-crema px-4 py-4 text-azul-footer">
        <p className={`font-expanded font-bold leading-none ${grande ? "text-[56px]" : "text-[40px]"}`}>
          <Cifra texto={valor} />
        </p>
        <p className={`font-expanded font-bold leading-tight ${grande ? "text-[19px]" : "text-[14px]"}`}>{etiqueta}</p>
        <p className={`font-expanded font-light italic leading-tight tracking-[-0.3px] ${grande ? "text-[16px]" : "text-[12.5px]"}`}>{nota}</p>
        {children}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_16px_0px_rgba(0,0,0,0.2)]" />
      </div>
    </Revelar>
  );
}

function Titulo({ a, b }: { a: string; b: string }) {
  return (
    <h2 className="px-4 text-center uppercase leading-none">
      <span className="font-expanded block text-[22px]">{a}</span>
      <span className="font-hand block text-[46px]">{b}</span>
    </h2>
  );
}

// Impacto para celular (< 1024 px).
export default function ImpactoMovil() {
  return (
    <div className="relative overflow-x-clip bg-crema text-azul-footer">
      <section className="relative h-[560px] w-full overflow-clip bg-azul">
        <img src="/img/institucion/hero-fondo.webp" alt="" className="absolute inset-0 size-full max-w-none object-cover" />
        <div className="absolute inset-x-0 top-[180px] flex flex-col items-center px-6 text-center text-crema">
          <h1 className="font-expanded text-[30px] font-semibold leading-[1.15] tracking-[-0.3px]">
            ¿Cómo generamos <span className="font-hand block text-[60px] font-normal leading-[0.9]">impacto?</span>
          </h1>
          <p className="font-expanded mt-5 text-[15px] leading-[1.4]">
            Transformamos historias, conocimientos y experiencias de personas mayores en contenidos audiovisuales, espacios de encuentro intergeneracional y archivo de memoria.
          </p>
        </div>
      </section>

      <PapelMovil className="pb-16 pt-4" sube={50}>
        <Titulo a="Nuestro impacto" b="en números" />

        <div className="mt-6 flex flex-col gap-3 px-4">
          <DatoMovil grande valor="21,1K" etiqueta="Suscriptores en Youtube" nota="Podcast y contenidos audiovisuales">
            <img
              src="/img/impacto/youtube.webp"
              alt="Canal de YouTube de Noventa y Contando"
              className="mt-3 aspect-[898/567] w-full rounded-[16px] object-cover shadow-[-6px_-6px_30px_0px_rgba(0,0,0,0.2)]"
            />
          </DatoMovil>
          <div className="grid grid-cols-2 gap-3">
            {DATOS.map((d) => (
              <DatoMovil key={d.etiqueta} {...d} />
            ))}
          </div>
          <DatoMovil grande valor="+1M" etiqueta="Visualizaciones mensuales en Instagram" nota="Podcast y contenidos audiovisuales" />
        </div>

        <div className="mt-16">
          <Titulo a="a quiénes" b="acompañamos" />
        </div>
        <Carrusel className="mt-6" ancho="min(80%, 360px)" espacio={14} intervalo={4500}>
          {PERFILES.map((p) => (
            <div key={p.titulo} className="py-3">
              <div className="relative flex h-[400px] flex-col justify-end overflow-clip rounded-[22px] p-4 shadow-[6px_6px_22px_rgba(0,0,0,0.25)]">
                <img src={`/img/impacto/${p.img}`} alt="" className="absolute inset-0 size-full max-w-none object-cover" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-[rgba(20,20,20,0)] from-45% to-[#141414]" />
                <div className="font-expanded relative flex flex-col gap-2 text-center text-white">
                  <h3 className="text-[23px] font-semibold leading-tight">{p.titulo}</h3>
                  <p className="text-[14.5px] leading-[1.3] tracking-[-0.2px]">{p.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </Carrusel>

        <div className="mt-14">
          <Titulo a="Mensajes de la" b="comunidad" />
        </div>
        <div className="-my-8 mt-0 overflow-hidden py-10">
          <div className="marquee flex w-max gap-4 pr-4" style={{ ["--dur" as string]: "45s" }}>
            {[...CAPTURAS, ...CAPTURAS].map((c, i) => (
              <div key={i} className="h-[300px] w-[240px] shrink-0 rounded-[18px] shadow-[6px_6px_30px_0px_rgba(0,0,0,0.2)]">
                <Recorte
                  src={`/img/impacto/${c.src}`}
                  alt="Mensaje de una persona de la comunidad"
                  className="h-full w-full rounded-[18px]"
                  ajuste={c.ajuste}
                />
              </div>
            ))}
          </div>
        </div>
      </PapelMovil>
    </div>
  );
}
