import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lienzo from "@/components/Lienzo";
import Recorte from "@/components/Recorte";
import Revelar from "@/components/Revelar";
import Hero from "@/components/inicio/Hero";
import Numeros from "@/components/inicio/Numeros";
import Pilares from "@/components/inicio/Pilares";
import Protagonistas from "@/components/inicio/Protagonistas";
import PlacaForms from "@/components/inicio/PlacaForms";
import InicioMovil from "@/components/inicio/InicioMovil";

export const metadata = { title: "Inicio | Seguimos Contando" };

// Inicio: medidas del Figma (1512 px de ancho), escaladas al ancho de pantalla.
export default function Inicio() {
  return (
    <>
    <div className="relative overflow-x-clip bg-crema max-md:hidden">
      <Nav />

      <Lienzo
        alto={4011}
        pie={128}
        fondoPie="url(/img/inicio/fondo-papel.webp) center bottom / 1512px auto no-repeat"
      >
        <Hero />

        {/* INICIO: papel sobre el hero. Va fuera del contenedor de abajo para que las puntas
            del papel roto se vean enteras sobre el video (antes quedaban cortadas en línea recta). */}
        <Recorte
          src="/img/inicio/fondo-papel.webp"
          className="pointer-events-none absolute left-0 top-[11.2px] h-[4000.2px] w-[1512px]"
          ajuste={{ alto: 100, ancho: 100, arriba: 0, izquierda: 0 }}
        />
        <div className="absolute left-0 top-[466px] h-[3545px] w-[1512px] overflow-clip">

          <Numeros />

          {/* Papel roto bajo los números */}
          <div className="absolute left-0 top-[533px] h-[123px] w-[1512px] drop-shadow-[0px_20px_30px_rgba(0,0,0,0.1)]">
            <Recorte
              src="/img/inicio/papel-roto.webp"
              className="absolute inset-0"
              ajuste={{ alto: 3378.7, ancho: 100, arriba: -842.19, izquierda: 0 }}
            />
          </div>

          {/* ¿Quiénes somos? */}
          <div id="quienes-somos" className="absolute left-0 top-0 h-px w-px" />
          <Revelar className="absolute left-0 top-[736px] h-[315px] w-[1512px]">
            <div className="absolute left-[calc(50%-0.5px)] top-0 flex h-[315px] w-[1015px] -translate-x-1/2 items-center justify-center">
              <div className="rotate-2 drop-shadow-[15px_15px_45px_rgba(0,0,0,0.3)]">
                <Recorte
                  src="/img/inicio/quienes-papel.webp"
                  className="h-[280.153px] w-[1005.809px]"
                  ajuste={{ alto: 123.41, ancho: 105.58, arriba: -11.22, izquierda: -3.06 }}
                />
              </div>
            </div>
            <h2 className="font-expanded absolute left-[calc(50%-432.97px)] top-[179.32px] flex h-[75.769px] w-[861.444px] -translate-y-1/2 items-center text-[70px] font-medium uppercase text-azul-footer">
              ¿Quiénes somos?
            </h2>
          </Revelar>

          <Revelar className="absolute left-1/2 top-[1081px] w-[1232px] -translate-x-1/2">
            <p className="font-expanded whitespace-pre-wrap text-center text-[28.171px] font-medium leading-[39.439px] text-azul-footer">
              Somos una asociación civil dedicada a promover la inclusión, la participación y el reconocimiento de las personas mayores a través de proyectos culturales, educativos y comunitarios.{" "}
              <strong className="font-extrabold">Trabajamos para preservar la memoria viva</strong>
              , fortalecer los vínculos intergeneracionales y{" "}
              <strong className="font-extrabold">contribuir a una nueva mirada sobre la longevidad</strong>
              , basada en la dignidad, la participación y la construcción de comunidad.
            </p>
          </Revelar>

          <Pilares />
          <Protagonistas />
          <PlacaForms />
        </div>
      </Lienzo>
    </div>

    <div className="relative bg-crema md:hidden">
      <Nav />
      <InicioMovil />
      <Footer soloMovil />
    </div>
    </>
  );
}
