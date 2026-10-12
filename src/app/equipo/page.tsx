/* eslint-disable @next/next/no-img-element */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lienzo from "@/components/Lienzo";
import Equipo from "@/components/equipo/Equipo";
import MuyPronto from "@/components/equipo/MuyPronto";
import { EQUIPO_PUBLICADO } from "@/lib/site";

export const metadata = { title: "Nuestro equipo | Seguimos Contando" };

export default function PaginaEquipo() {
  // Medidas del Figma: "Con equipo" 1240 de alto (footer en 1107) / "Muy pronto" 997 (footer en 864).
  const alto = EQUIPO_PUBLICADO ? 1240 : 997;
  const altoFondo = EQUIPO_PUBLICADO ? 1691 : 1448;

  return (
    <div className="relative overflow-x-clip bg-crema">
      <Nav />
      <Lienzo
        alto={alto}
        despues={
          <div
            className="relative z-10"
            style={{ marginTop: "calc(var(--k) * -133px - 100px)" }}
          >
            <Footer />
          </div>
        }
      >
        {/* El fondo mide lo que toda la pantalla de Figma (incluye el pie) y se recorta arriba */}
        <img
          src="/img/equipo/fondo.png"
          alt=""
          className="pointer-events-none absolute left-0 top-0 w-[1512px] max-w-none object-cover"
          style={{ height: altoFondo }}
        />
        {EQUIPO_PUBLICADO ? <Equipo /> : <MuyPronto />}
      </Lienzo>
    </div>
  );
}
