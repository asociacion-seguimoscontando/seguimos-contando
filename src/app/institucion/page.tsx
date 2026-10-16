/* eslint-disable @next/next/no-img-element */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lienzo from "@/components/Lienzo";
import Recorte from "@/components/Recorte";
import Revelar from "@/components/Revelar";
import Hero from "@/components/institucion/Hero";
import Valores from "@/components/institucion/Valores";
import Principios from "@/components/institucion/Principios";
import InstitucionMovil from "@/components/institucion/InstitucionMovil";
import { CARPETA_INSTITUCIONAL_URL } from "@/lib/site";
import { metaPagina } from "@/lib/seo";
import { RUTAS } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Institución | Seguimos Contando",
  descripcion:
    "Somos una asociación civil que promueve la inclusión, la participación y el reconocimiento de las personas mayores con proyectos culturales, educativos y comunitarios.",
  ruta: RUTAS.institucion,
});

export default function Institucion() {
  return (
    <>
    <div className="relative overflow-x-clip bg-crema max-md:hidden">
      <Nav />
      <Lienzo
        alto={4236}
        pie={133}
        fondoPie="url(/img/inicio/fondo-papel.webp) center bottom / 1512px auto no-repeat"
      >
        <Hero />

        <div className="absolute left-0 top-0 h-[4236px] w-[1512px] overflow-clip">
          <Recorte
            src="/img/inicio/fondo-papel.webp"
            className="pointer-events-none absolute inset-0"
            ajuste={{ alto: 100.01, ancho: 100, arriba: 0, izquierda: 0.03 }}
          />

          {/* Foto con papel roto + frase */}
          <Recorte
            src="/img/institucion/franja.webp"
            className="pointer-events-none absolute left-0 top-[466px] h-[751px] w-[1512px]"
            ajuste={{ alto: 554.26, ancho: 100, arriba: -62.38, izquierda: 0 }}
          />
          <Recorte
            src="/img/institucion/foto-papel.webp"
            className="pointer-events-none absolute left-0 top-[518px] h-[748px] w-[1512px]"
            ajuste={{ alto: 556.52, ancho: 100, arriba: -70.52, izquierda: 0 }}
          />
          <div id="frase" className="absolute left-0 top-[600px] h-px w-px scroll-mt-[60px]" />
          <Revelar className="absolute left-[756px] top-[807px] w-[1302px] -translate-x-1/2">
            <blockquote className="font-expanded text-center italic text-white">
              <p className="text-[38px]">
                <span className="text-[40px] font-black">“</span>Reconocemos el valor inherente de cada persona
              </p>
              <p className="text-[38px]">
                mayor como protagonista de su propia historia y portadora de memoria, experiencia y saberes.
                <span className="text-[40px] font-black">”</span>
              </p>
            </blockquote>
          </Revelar>

          <Valores />
          <Principios />

          {/* Descarga */}
          <div className="absolute left-[100px] top-[3829px] flex w-[1312px] flex-col items-center gap-[40px]">
            <div className="flex items-start gap-[40px]">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative h-[66.612px] w-[22.977px]">
                  <img
                    src="/img/institucion/flecha.svg"
                    alt=""
                    className="rebote absolute inset-[0_-2.09%_-3.18%_-5.01%] block size-full max-w-none"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                </div>
              ))}
            </div>
            <a
              href={CARPETA_INSTITUCIONAL_URL}
              download
              className="font-expanded flex h-[69px] items-center justify-center whitespace-nowrap rounded-[20px] bg-azul-footer px-[32px] py-[15px] text-[24px] font-semibold tracking-[-0.24px] text-white drop-shadow-[4px_4px_15px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105"
            >
              DESCARGA CARPETA INSTITUCIONAL
            </a>
          </div>
        </div>

        {/* Flecha que invita a bajar (misma que en Inicio) */}
        <a
          href="#frase"
          aria-label="Bajar a la frase"
          className="absolute left-[733px] top-[492px] z-10 block h-[89px] w-[45px]"
        >
          <img src="/img/inicio/hero-flecha.svg" alt="" className="rebote absolute inset-0 block size-full max-w-none" />
        </a>
      </Lienzo>
    </div>

    <div className="relative bg-crema md:hidden">
      <Nav />
      <InstitucionMovil />
      <Footer soloMovil />
    </div>
    </>
  );
}
