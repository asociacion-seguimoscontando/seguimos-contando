/* eslint-disable @next/next/no-img-element */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lienzo from "@/components/Lienzo";
import Recorte from "@/components/Recorte";
import Revelar from "@/components/Revelar";
import Plataformas from "@/components/proyectos/Plataformas";
import Redes from "@/components/proyectos/Redes";
import MasProyectos from "@/components/proyectos/MasProyectos";
import ProyectosMovil from "@/components/proyectos/ProyectosMovil";
import { NEWSLETTER_URL } from "@/lib/site";
import { metaPagina } from "@/lib/seo";
import { RUTAS } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Nuestros proyectos | Seguimos Contando",
  descripcion:
    "Noventa y Contando, nuestro podcast principal, más redes, newsletter e iniciativas que dan voz a las personas mayores. Sumate y contanos tu historia.",
  ruta: RUTAS.proyectos,
});

export default function Proyectos() {
  return (
    <>
    <div className="relative overflow-x-clip bg-[#fdd163] max-md:hidden">
      <Nav tema="naranja" />
      <Lienzo
        alto={3653}
        pie={100}
      >
        <div className="absolute left-0 top-0 h-[4137px] w-[1512px] overflow-clip">
          <img
            src="/img/proyectos/fondo.webp"
            alt=""
            className="pointer-events-none absolute left-0 top-0 h-[4137px] w-[1512px] max-w-none object-cover"
          />

          {/* Proyecto principal: Podcast */}
          <Revelar className="absolute left-[100px] top-[213px] w-[505px]">
            <div className="flex flex-col gap-[20px] text-[#e77f22]">
              <h1 className="font-expanded text-[87.094px] font-medium leading-[normal]">
                Nuestro proyecto principal
              </h1>
              <p className="font-hand self-start whitespace-nowrap text-[139.736px] leading-[118.857px]">Podcast</p>
            </div>
          </Revelar>
          <Recorte
            src="/img/proyectos/logo-noventa.png"
            alt="Noventa y Contando"
            className="absolute left-[100px] top-[652px] h-[66px] w-[624px]"
            ajuste={{ alto: 218.87, ancho: 110.01, arriba: -60.38, izquierda: -4.96 }}
          />
          <Revelar className="absolute left-[100px] top-[743px] w-[624px]">
            <p className="font-expanded text-justify text-[27.153px] font-medium leading-[47.572px] text-[#e77f22]">
              <span className="font-bold italic">“La generación que lo vivió todo, ahora te lo cuenta”,</span>{" "}
              es un proyecto y podcast intergeneracional de Argentina, protagonizado por personas mayores, especialmente de más de 90 años, que comparten sus historias, experiencias y aprendizajes.
            </p>
          </Revelar>
          <Plataformas />

          {/* Newsletter */}
          <Revelar className="absolute left-[100px] top-[1216px]">
            <a
              href={NEWSLETTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suscribite al newsletter Las cartas de Tita"
              className="block h-[386px] w-[686px] overflow-hidden rounded-[30px] shadow-[10px_10px_65px_0px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5 hover:-rotate-1"
            >
              <img src="/img/proyectos/tita-tarjeta.webp" alt="" className="size-full max-w-none object-cover" />
            </a>
          </Revelar>
          <Revelar className="absolute right-[100px] top-[1382px] -translate-y-1/2 text-right">
            <p className="font-expanded whitespace-nowrap text-[92px] font-medium leading-[normal] text-[#e77f22]">
              Suscribite
              <br />a nuestro
            </p>
            <p className="font-hand whitespace-nowrap text-[83.004px] leading-[91.857px] text-[#e77f22]">
              Newsletter <span style={{ letterSpacing: "-16.6px" }}> </span>semanal
            </p>
          </Revelar>
          <Recorte
            src="/img/proyectos/logo-tita.png"
            alt="Las cartas de Tita"
            className="absolute left-[890px] top-[1539px] h-[46px] w-[522px]"
            ajuste={{ alto: 262.02, ancho: 114.2, arriba: -84.09, izquierda: -7.1 }}
          />

          <Redes />
          <MasProyectos />
        </div>
      </Lienzo>
    </div>

    <div className="relative bg-[#fdd163] md:hidden">
      <Nav tema="naranja" />
      <ProyectosMovil />
      <Footer soloMovil />
    </div>
    </>
  );
}
