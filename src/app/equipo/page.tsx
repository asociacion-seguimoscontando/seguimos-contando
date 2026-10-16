/* eslint-disable @next/next/no-img-element */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lienzo from "@/components/Lienzo";
import Equipo from "@/components/equipo/Equipo";
import MuyPronto from "@/components/equipo/MuyPronto";
import EquipoMovil from "@/components/equipo/EquipoMovil";
import { EQUIPO_PUBLICADO } from "@/lib/site";
import { metaPagina } from "@/lib/seo";
import { RUTAS } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Nuestro equipo | Seguimos Contando",
  descripcion:
    "Conocé a las personas que hacen posible Seguimos Contando, la asociación civil que conecta generaciones.",
  ruta: RUTAS.equipo,
  indexar: EQUIPO_PUBLICADO,
});

export default function PaginaEquipo() {
  // Medidas del Figma: "Con equipo" 1240 de alto (footer en 1107) / "Muy pronto" 997 (footer en 864).
  const alto = EQUIPO_PUBLICADO ? 1240 : 997;
  const altoFondo = EQUIPO_PUBLICADO ? 1691 : 1448;

  return (
    <>
    <div className="relative overflow-x-clip bg-crema max-md:hidden">
      <Nav />
      <Lienzo
        alto={alto}
        pie={133}
      >
        {/* El fondo mide lo que toda la pantalla de Figma (incluye el pie) y se recorta arriba */}
        <img
          src="/img/equipo/fondo.webp"
          alt=""
          className="pointer-events-none absolute left-0 top-0 w-[1512px] max-w-none object-cover"
          style={{ height: altoFondo }}
        />
        {EQUIPO_PUBLICADO ? <Equipo /> : <MuyPronto />}
      </Lienzo>
    </div>

    <div className="relative bg-azul-footer md:hidden">
      <Nav />
      <EquipoMovil />
      <Footer soloMovil />
    </div>
    </>
  );
}
