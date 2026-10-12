/* eslint-disable @next/next/no-img-element */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lienzo from "@/components/Lienzo";
import Colaborar from "@/components/colaborar/Colaborar";
import ColaborarMovil from "@/components/colaborar/ColaborarMovil";

export const metadata = { title: "Quiero colaborar | Seguimos Contando" };

export default function PaginaColaborar() {
  return (
    <>
    <div className="relative overflow-x-clip bg-crema max-md:hidden">
      <Nav />
      <Lienzo
        alto={1526}
        despues={
          <div
            className="relative z-10"
            style={{ marginTop: "calc(var(--k) * -133px - 100px)" }}
          >
            <Footer />
          </div>
        }
      >
        {/* Mismo papel azul que Nuestro equipo (se descarga con scripts\descargar-equipo.ps1) */}
        <img
          src="/img/equipo/fondo.webp"
          alt=""
          className="pointer-events-none absolute left-0 top-0 h-[1977px] w-[1512px] max-w-none object-cover"
        />
        <Colaborar />
      </Lienzo>
    </div>

    <div className="relative bg-azul-footer md:hidden">
      <Nav />
      <ColaborarMovil />
      <Footer />
    </div>
    </>
  );
}
