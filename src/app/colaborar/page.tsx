/* eslint-disable @next/next/no-img-element */
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lienzo from "@/components/Lienzo";
import Colaborar from "@/components/colaborar/Colaborar";
import ColaborarMovil from "@/components/colaborar/ColaborarMovil";
import { metaPagina } from "@/lib/seo";
import { RUTAS } from "@/lib/site";

export const metadata = metaPagina({
  titulo: "Quiero colaborar | Seguimos Contando",
  descripcion:
    "Doná a Seguimos Contando por Mercado Pago con QR, alias o CVU. Tu aporte sostiene proyectos que conectan generaciones y dan voz a las personas mayores.",
  ruta: RUTAS.colaborar,
});

export default function PaginaColaborar() {
  return (
    <>
    <div className="relative overflow-x-clip bg-crema max-md:hidden">
      <Nav />
      <Lienzo
        alto={1526}
        pie={133}
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
      <Footer soloMovil />
    </div>
    </>
  );
}
