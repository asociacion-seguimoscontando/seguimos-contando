/* eslint-disable @next/next/no-img-element */
import Revelar from "../Revelar";
import PapelMovil from "../movil/Papel";
import { PRINCIPIOS } from "./Principios";
import { DIFUMINADO, VALORES } from "./Valores";
import Apilado from "../Apilado";
import { CARPETA_INSTITUCIONAL_URL } from "@/lib/site";

// Institución para celular (< 1024 px).
export default function InstitucionMovil() {
  const valores = [...VALORES, ...VALORES];
  return (
    <div className="relative overflow-x-clip bg-crema text-azul-footer">
      {/* Hero */}
      <section className="relative flex w-full flex-col overflow-clip bg-azul pb-[85px] pt-[130px]">
        <img src="/img/institucion/hero-fondo.webp" alt="" className="absolute inset-0 size-full max-w-none object-cover" />
        <div className="relative flex flex-col items-center px-6 text-center text-crema">
          <h1 className="font-expanded text-[29px] font-semibold leading-[1.22] tracking-[-0.3px]">
            Una <span className="font-hand text-[40px] font-normal leading-none">asociación civil</span> por la dignidad y la memoria viva.
          </h1>
          <p className="font-expanded mt-5 text-[15px] leading-[1.4]">
            Promovemos la inclusión, la participación y el reconocimiento de las personas mayores a través de proyectos culturales, educativos y comunitarios.
          </p>
          {/* Flecha para bajar (igual que en Inicio), 60px debajo del texto */}
          <a href="#frase" aria-label="Bajar a la frase" className="relative mt-[60px] block h-[56px] w-[28px]">
            <img src="/img/inicio/hero-flecha.svg" alt="" className="rebote absolute inset-0 block size-full max-w-none" />
          </a>
        </div>
      </section>

      {/* Foto con papel roto + frase */}
      {/* Igual que en compu: el papel roto de la foto se apoya directo sobre el azul del hero
          (sin el borde crema del bloque de abajo). Las imágenes tienen ancho fijo (centradas):
          así la franja queda siempre a la misma altura y la frase siempre cae adentro. */}
      <div id="frase" className="relative z-10 -mt-[115px] h-[440px] w-full scroll-mt-[40px] [clip-path:inset(-300px_0_0_0)]">
        {/* Relleno de papel con la forma del borde roto: tapa las rendijas entre el borde y la foto
            (si no, se ve el azul del hero por detrás). */}
        <img
          src="/img/institucion/franja-relleno-movil.webp"
          alt=""
          className="pointer-events-none absolute left-1/2 top-[-433px] w-[1100px] max-w-none -translate-x-1/2"
        />
        <img
          src="/img/institucion/franja.webp"
          alt=""
          className="pointer-events-none absolute left-1/2 top-[-433px] w-[1100px] max-w-none -translate-x-1/2"
        />
        <img
          src="/img/institucion/foto-papel.webp"
          alt=""
          className="pointer-events-none absolute left-1/2 top-[-437px] w-[1100px] max-w-none -translate-x-1/2"
        />
        <Revelar className="absolute inset-x-0 top-[210px] -translate-y-1/2 px-6">
          <blockquote className="font-expanded text-center text-[min(16px,4.2vw)] font-medium italic leading-[1.35] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
            <span className="text-[19px] font-black">“</span>Reconocemos el valor inherente de cada persona mayor como protagonista de su propia historia y portadora de memoria, experiencia y saberes.
            <span className="text-[19px] font-black">”</span>
          </blockquote>
        </Revelar>
      </div>


      {/* El papel pasa por debajo de la foto: así lo que asoma bajo el borde roto tiene la misma textura */}
      <PapelMovil className="-mt-[160px] pb-[calc(100px+8.9vw)] pt-[80px]" borde={false}>
        {/* Valores institucionales */}
        <Revelar className="mt-[60px] flex flex-col gap-[20px] px-6 text-center">
          <div className="flex flex-col gap-2 uppercase">
            <span className="font-hand text-[40px] leading-none">valores institucionales</span>
            <div className="font-expanded text-[30px] leading-[1.1]">
              <p className="font-semibold">lo que guía,</p>
              <p>cada decisión</p>
            </div>
          </div>
          <p className="font-expanded text-[15px] font-medium leading-[1.5] tracking-[-0.15px]">
            Somos una asociación civil dedicada a promover la inclusión, la participación y el reconocimiento de las personas mayores a través de proyectos culturales, educativos y comunitarios. Trabajamos para preservar la memoria viva y fortalecer los vínculos intergeneracionales.
          </p>
        </Revelar>

        <div
          className="relative mx-6 mt-[20px] h-[320px] overflow-hidden"
          style={{ maskImage: DIFUMINADO, WebkitMaskImage: DIFUMINADO }}
          aria-label="Valores institucionales"
        >
          <ul className="marquee-v flex w-full flex-col gap-4 pb-4" style={{ ["--dur" as string]: "28s" }}>
            {valores.map((v, i) => (
              <li key={i}>
                <div className="flex w-full flex-col items-center justify-center rounded-[20px] bg-crema px-5 py-4 text-center shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                  <span className="font-hand text-[44px] leading-[40px]">{String((i % VALORES.length) + 1).padStart(2, "0")}</span>
                  <span className="font-expanded mt-1 text-[22px] leading-tight">{v}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Principios */}
        <Apilado
          espacio={20}
          asoma={24}
          huecoEncabezado={20}
          className="mt-[60px] px-5"
          encabezado={
            <div className="flex flex-col gap-3 px-1 text-center uppercase">
              <span className="font-hand text-[40px] leading-none">Principios institucionales</span>
              <span className="font-expanded text-[24px] leading-[1.15]">Cinco principios, un mismo rumbo</span>
            </div>
          }
        >
          {PRINCIPIOS.map((p) => (
              <article key={p.num} className="relative overflow-clip rounded-[20px] bg-crema p-6 shadow-[10px_10px_40px_rgba(0,0,0,0.15)]">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-8 top-5 h-[78px] w-[118px] rounded-[32px] bg-[#e5d4bf] shadow-[inset_0px_0px_14px_0px_rgba(0,0,0,0.15)]"
                />
                <span
                  aria-hidden
                  className="font-expanded absolute right-5 top-5 flex h-[78px] items-center text-[38px] font-extrabold leading-none tracking-[-2px]"
                >
                  {String(p.num).padStart(2, "0")}
                </span>
                <h3 className="font-hand min-h-[78px] pr-[92px] text-[31px] leading-none">{p.titulo}</h3>
                <p className="font-expanded mt-3 text-[14.5px] font-medium leading-[1.45]">{p.texto}</p>
              </article>
          ))}
        </Apilado>

        {/* Descarga */}
        <div className="mt-[60px] flex flex-col items-center gap-[20px] px-6">
          <div className="flex items-start gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative h-[40px] w-[14px]">
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
            className="font-expanded flex min-h-[64px] w-full max-w-[340px] items-center justify-center rounded-[18px] bg-azul-footer px-6 py-3 text-center text-[17px] font-semibold leading-tight tracking-[-0.2px] text-white drop-shadow-[4px_4px_12px_rgba(0,0,0,0.2)] active:scale-[0.98]"
          >
            DESCARGA CARPETA INSTITUCIONAL
          </a>
        </div>
      </PapelMovil>
    </div>
  );
}
