/* eslint-disable @next/next/no-img-element */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lienzo from "@/components/Lienzo";
import Dato from "@/components/impacto/Dato";
import Acompanamos from "@/components/impacto/Acompanamos";
import Comentarios from "@/components/impacto/Comentarios";
import ImpactoMovil from "@/components/impacto/ImpactoMovil";
import { metaPagina } from "@/lib/seo";
import { RUTAS } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Impacto | Seguimos Contando",
  descripcion:
    "Transformamos historias de personas mayores en contenidos audiovisuales, encuentros intergeneracionales y archivo de memoria. Conocé nuestro alcance.",
  ruta: RUTAS.impacto,
});

export default function Impacto() {
  return (
    <>
    <div className="relative overflow-x-clip bg-crema max-md:hidden">
      <Nav />
      <Lienzo
        alto={4038}
        pie={100}
      >
        {/* Encabezado azul */}
        <div className="absolute left-0 top-0 h-[864px] w-[1512px] overflow-clip">
          <img
            src="/img/institucion/hero-fondo.webp"
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          />
          <h1 className="font-expanded absolute left-[calc(50%+0.5px)] top-[213px] w-max -translate-x-1/2 whitespace-nowrap text-center text-[70px] font-semibold leading-[85.8px] tracking-[-0.5px] text-crema">
            ¿Cómo generamos <span className="font-hand text-[110px] font-normal">impacto?</span>
          </h1>
          <p className="font-expanded absolute left-[calc(50%+0.5px)] top-[324px] w-[1113px] -translate-x-1/2 text-center text-[26px] leading-[34px] text-crema">
            Transformamos historias, conocimientos y experiencias de personas mayores en contenidos audiovisuales, espacios de encuentro intergeneracional y archivo de memoria.
          </p>
        </div>

        {/* Papel */}
        <div className="absolute left-0 top-0 h-[4522px] w-[1512px] overflow-clip">
          <img
            src="/img/impacto/fondo.webp"
            alt=""
            className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
          />

          <h2 className="absolute left-[756px] top-[883px] h-[65px] w-[1312px] -translate-x-1/2 text-center uppercase leading-[65px] text-azul-footer">
            <span className="font-expanded text-[40px]">Nuestro impacto </span>
            <span className="font-hand text-[65px]">en números</span>
          </h2>

          {/* Números */}
          <div className="absolute left-[100px] top-[988px] flex w-[1312px] flex-col gap-[40px]">
            <div className="flex items-stretch justify-between">
              <Dato
                valor="21,1K"
                etiqueta="Suscriptores en Youtube"
                nota="Podcast y contenidos audiovisuales"
                className="w-[825px] [&>div]:pr-[60px]"
                desde="izquierda"
              >
                <img
                  src="/img/impacto/youtube.webp"
                  alt="Canal de YouTube de Noventa y Contando"
                  className="absolute left-[110px] top-[240px] h-[567px] w-[898px] max-w-none rounded-[40px] object-cover shadow-[-10px_-10px_60px_0px_rgba(0,0,0,0.2)]"
                />
              </Dato>
              <div className="flex w-[447px] flex-col gap-[31px]">
                <Dato valor="150K" etiqueta="Seguidores en Tiktok" nota="Contenido intergeneracional" className="w-full" retraso={0.1} desde="derecha" />
                <Dato valor="+400K" etiqueta="Seguidores en Instagram" tamEtiqueta={25.7} nota="Comunidad digital" className="w-full" retraso={0.2} desde="derecha" />
                <Dato valor="13,6K" etiqueta="Seguidores en Spotify" nota="Comunidad digital" className="w-full" retraso={0.3} desde="derecha" />
              </div>
            </div>

            <div className="flex items-stretch gap-[40px]">
              <Dato valor="152K" etiqueta="Reproducciones y descargas en Spotify" tamEtiqueta={27} nota="Escucha acumulada" className="flex-1" />
              <Dato valor="10" etiqueta="Alianzas construidas" nota="Empresas, Instituciones" className="flex-1" retraso={0.15} />
              <Dato valor="33" etiqueta="Episodios publicados" nota="2 temporadas del podcast" className="flex-1" retraso={0.3} />
            </div>

            <Dato valor="+1M" etiqueta="Visualizaciones mensuales en Instagram" nota="Podcast y contenidos audiovisuales" className="w-full" />
          </div>

          <Acompanamos />
          <Comentarios />
        </div>
      </Lienzo>
    </div>

    <div className="relative bg-crema md:hidden">
      <Nav />
      <ImpactoMovil />
      <Footer soloMovil />
    </div>
    </>
  );
}
