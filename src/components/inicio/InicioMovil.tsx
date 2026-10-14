/* eslint-disable @next/next/no-img-element */
import Recorte from "../Recorte";
import Revelar from "../Revelar";
import Lienzo from "../Lienzo";
import Carrusel from "../movil/Carrusel";
import { papeles } from "./Pilares";
import { FOTOS, Tarjeta } from "./Protagonistas";
import { FORM_MAS_90_URL } from "@/lib/site";

const NUMEROS = [
  { valor: "+400k", etiqueta: "SEGUIDORES" },
  { valor: "+33", etiqueta: "EPISODIOS" },
  { valor: "+1M", etiqueta: "VISUALIZACIONES" },
];

const PAPELES = papeles();

// Inicio para celular (< 1024 px): una sola columna, mismas texturas y textos.
export default function InicioMovil() {
  const track = [...NUMEROS, ...NUMEROS, ...NUMEROS, ...NUMEROS];
  const fotos = [...FOTOS, ...FOTOS];
  return (
    <div className="relative overflow-x-clip bg-crema text-azul-footer">
      {/* Hero */}
      <section className="relative h-[620px] w-full overflow-clip bg-azul">
        <video
          className="absolute inset-0 size-full object-cover"
          src="/video/inicio.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
        <div aria-hidden className="absolute inset-0 bg-[#000000]/40" />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-transparent from-[53%] to-[rgba(0,0,0,0.5)] to-[92%]"
        />
        <div className="absolute inset-x-0 top-[44%] flex -translate-y-1/2 flex-col items-center gap-4 px-5">
          <Recorte
            src="/img/inicio/hero-logo.webp"
            alt="Asociación Civil Seguimos Contando"
            className="aspect-[900/96] w-full max-w-[335px]"
            ajuste={{ alto: 314.61, ancho: 100, arriba: -107.31, izquierda: 0 }}
          />
          <div className="relative h-[3px] w-full max-w-[335px]">
            <img src="/img/inicio/hero-linea.svg" alt="" className="absolute inset-0 block size-full max-w-none" />
          </div>
          <h1 className="font-expanded text-center text-[19px] font-medium leading-[1.3] text-crema">
            Conectamos generaciones para construir una sociedad para todas las edades.
          </h1>
        </div>
        <a
          href="#quienes-somos"
          aria-label="Ir a ¿Quiénes somos?"
          className="absolute bottom-[96px] left-1/2 block h-[56px] w-[28px] -translate-x-1/2"
        >
          <img src="/img/inicio/hero-flecha.svg" alt="" className="rebote absolute inset-0 block size-full max-w-none" />
        </a>
      </section>

      {/* Papel que sube sobre el hero */}
      <div
        className="relative -mt-[62px] bg-[length:100%_auto] pb-16"
        style={{ backgroundImage: "url(/img/movil/papel-textura-continua.webp)" }}
      >
        <img
          src="/img/movil/papel-borde.webp"
          alt=""
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full -translate-y-[calc(100%-1px)] [filter:drop-shadow(0_-6px_10px_rgba(0,0,0,0.25))] [clip-path:inset(-40px_0_0_0)]"
        />

        {/* Números */}
        <div className="overflow-hidden pt-8" aria-label="Nuestro impacto en números">
          <div className="marquee flex w-max gap-[56px] pr-[56px] text-center" style={{ ["--dur" as string]: "30s" }}>
            {track.map((n, i) => (
              <div key={i} className="flex shrink-0 flex-col justify-center">
                <p className="font-expanded text-[56px] font-semibold leading-[0.8] tracking-[-1.1px]">{n.valor}</p>
                <p className="font-expanded text-[22px] font-medium leading-[1.4]">{n.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Papel roto bajo los números */}
        <div className="relative mt-8 aspect-[1512/123] w-full drop-shadow-[0px_10px_16px_rgba(0,0,0,0.1)]">
          <Recorte
            src="/img/inicio/papel-roto.webp"
            className="absolute inset-0"
            ajuste={{ alto: 3378.7, ancho: 100, arriba: -842.19, izquierda: 0 }}
          />
        </div>

        {/* ¿Quiénes somos? */}
        <div id="quienes-somos" className="scroll-mt-20" />
        <Revelar className="mt-10 flex justify-center px-4">
          <div className="relative rotate-2 drop-shadow-[8px_8px_24px_rgba(0,0,0,0.3)]">
            <Recorte
              src="/img/inicio/quienes-papel.webp"
              className="h-[104px] w-[330px]"
              ajuste={{ alto: 140, ancho: 112, arriba: -14, izquierda: -6 }}
            />
            <h2 className="font-expanded absolute inset-0 flex items-center justify-center whitespace-nowrap text-[24px] font-medium uppercase">
              ¿Quiénes somos?
            </h2>
          </div>
        </Revelar>

        <Revelar className="mt-9 px-6">
          <p className="font-expanded text-center text-[16px] font-medium leading-[1.4]">
            Somos una asociación civil dedicada a promover la inclusión, la participación y el reconocimiento de las personas mayores a través de proyectos culturales, educativos y comunitarios.{" "}
            <strong className="font-extrabold">Trabajamos para preservar la memoria viva</strong>
            , fortalecer los vínculos intergeneracionales y{" "}
            <strong className="font-extrabold">contribuir a una nueva mirada sobre la longevidad</strong>
            , basada en la dignidad, la participación y la construcción de comunidad.
          </p>
        </Revelar>

        {/* Misión / Visión / Propósito */}
        <Carrusel className="mt-12" ancho="min(88%, 400px)" espacio={14} intervalo={5000} aire={72}>
          {[0, 1, 2].map((i) => (
            <div key={i} className="py-3">
              <Lienzo ancho={419} alto={559} recortar={false}>
                {PAPELES[i]}
              </Lienzo>
            </div>
          ))}
        </Carrusel>

        {/* Protagonistas */}
        <h2 className="mt-16 text-center uppercase leading-none">
          <span className="font-expanded block text-[22px]">Nuestros</span>
          <span className="font-hand block text-[48px]">protagonistas</span>
        </h2>
        <div className="-mb-16 -mt-12 overflow-hidden py-16">
          <div className="marquee flex w-max gap-4 pr-4" style={{ ["--dur" as string]: "50s" }}>
            {fotos.map((f, i) => (
              <Tarjeta key={i} {...f} className="h-[240px] w-[192px]" />
            ))}
          </div>
        </div>

        {/* ¿Tenés +90 años? */}
        <div className="mt-14 flex flex-col items-center gap-5 px-4">
          <div className="flex items-start gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative h-[40px] w-[14px]">
                <img
                  src="/img/inicio/flecha-forms.svg"
                  alt=""
                  className="rebote absolute inset-[0_-2.09%_-3.18%_-5.01%] block size-full max-w-none"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              </div>
            ))}
          </div>
          <a
            href={FORM_MAS_90_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="¿Tenés +90 años? Completá el formulario"
            className="relative block w-full rounded-[28px] drop-shadow-[6px_6px_14px_rgba(0,0,0,0.5)]"
          >
            <div className="relative h-[170px] w-full overflow-hidden rounded-[26px]">
              <img
                src="/img/inicio/forms-placa.webp"
                alt=""
                className="absolute max-w-none object-cover"
                style={{ width: "205%", left: "-52%", top: "50%", transform: "translateY(-50%)" }}
              />
            </div>
            <div className="absolute -left-3 -top-3 -rotate-[21deg]">
              <div className="rounded-full border border-white bg-azul-footer px-4 py-1.5">
                <p className="font-expanded whitespace-nowrap text-[14px] font-medium tracking-[-1px] text-white">FORMULARIO</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

