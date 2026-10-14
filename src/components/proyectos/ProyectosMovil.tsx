/* eslint-disable @next/next/no-img-element */
import Recorte from "../Recorte";
import Revelar from "../Revelar";
import { PLATAFORMAS } from "./Plataformas";
import { FORM_HISTORIA_URL, LEGISLATURA_URL, NEWSLETTER_URL } from "@/lib/site";

const NARANJA = "text-[#e77f22]";

function Red({ href, src, nombre, className = "", posicion = "center" }: { href: string; src: string; nombre: string; className?: string; posicion?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Seguinos en ${nombre}`}
      className={`relative block overflow-hidden rounded-[20px] shadow-[6px_6px_30px_0px_rgba(0,0,0,0.35)] active:scale-[0.98] ${className}`}
    >
      <img src={src} alt="" className="absolute inset-0 size-full max-w-none object-cover" style={{ objectPosition: posicion }} />
    </a>
  );
}

function Proyecto({ href, src, nombre, etiqueta }: { href: string; src: string; nombre: string; etiqueta: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={nombre}
      className="relative block rounded-[20px] drop-shadow-[6px_6px_18px_rgba(0,0,0,0.4)] active:scale-[0.98]"
    >
      <div className="relative aspect-[1350/760] w-full overflow-hidden rounded-[18px]">
        <img src={src} alt="" className="absolute inset-0 size-full max-w-none object-cover" />
      </div>
      <div className="pointer-events-none absolute -left-3 -top-3 -rotate-[18deg]">
        <div className="rounded-full border border-white bg-[#fbb22c] px-4 py-1">
          <p className="font-expanded whitespace-nowrap text-[14px] font-medium tracking-[-1.2px] text-white">{etiqueta}</p>
        </div>
      </div>
    </a>
  );
}

// Nuestros proyectos para celular (< 1024 px).
export default function ProyectosMovil() {
  return (
    <div
      className={`relative overflow-x-clip bg-[#fdd163] bg-[length:100%_auto] pb-16 pt-[130px] ${NARANJA}`}
      style={{ backgroundImage: "url(/img/movil/amarillo-textura-continua.webp)" }}
    >
      {/* Podcast */}
      <Revelar className="px-6">
        <h1 className="font-expanded text-[40px] font-medium leading-[1.05]">Nuestro proyecto principal</h1>
        <p className="font-hand mt-1 text-[78px] leading-[0.9]">Podcast</p>
      </Revelar>
      <div className="mt-6 px-6">
        <Recorte
          src="/img/proyectos/logo-noventa.png"
          alt="Noventa y Contando"
          className="aspect-[624/66] w-full"
          ajuste={{ alto: 218.87, ancho: 110.01, arriba: -60.38, izquierda: -4.96 }}
        />
      </div>
      <Revelar className="mt-5 px-6">
        <p className="font-expanded text-[16px] font-medium leading-[1.6]">
          <span className="font-bold italic">“La generación que lo vivió todo, ahora te lo cuenta”,</span>{" "}
          es un proyecto y podcast intergeneracional de Argentina, protagonizado por personas mayores, especialmente de más de 90 años, que comparten sus historias, experiencias y aprendizajes.
        </p>
      </Revelar>

      <div className="mt-10 flex flex-col gap-6 px-5">
        {PLATAFORMAS.map((p, i) => (
          <Revelar key={p.nombre} retraso={i * 0.1}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Escuchá el podcast en ${p.nombre}`}
              className="block overflow-hidden rounded-[20px] drop-shadow-[6px_6px_18px_rgba(0,0,0,0.35)] active:scale-[0.98]"
            >
              <div className="relative aspect-[580/239] w-full">
                <img src={`/img/proyectos/${p.foto}`} alt="" className="absolute inset-0 size-full max-w-none object-cover" />
              </div>
              <div className="relative aspect-[580/57] w-full" style={{ background: p.barra }}>
                <div className="absolute" style={{ left: p.logoIzq, width: p.logoAncho, top: `${(p.logoTop / 57) * 100}%`, height: `${(p.logoAlto / 57) * 100}%` }}>
                  <Recorte src={`/img/proyectos/${p.logo}`} alt={p.nombre} className="h-full w-full" ajuste={p.ajusteLogo} />
                </div>
              </div>
            </a>
          </Revelar>
        ))}
      </div>

      {/* Newsletter */}
      <Revelar className="mt-16 px-6">
        <p className="font-expanded text-[40px] font-medium leading-[1.05]">Suscribite a nuestro</p>
        <p className="font-hand text-[50px] leading-[1]">Newsletter semanal</p>
      </Revelar>
      <Revelar className="mt-6 px-5">
        <a
          href={NEWSLETTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Suscribite al newsletter Las cartas de Tita"
          className="block aspect-[686/386] overflow-hidden rounded-[20px] shadow-[6px_6px_30px_0px_rgba(0,0,0,0.35)] active:scale-[0.98]"
        >
          <img src="/img/proyectos/tita-tarjeta.webp" alt="" className="size-full max-w-none object-cover" />
        </a>
      </Revelar>
      <div className="mt-5 px-6">
        <Recorte
          src="/img/proyectos/logo-tita.png"
          alt="Las cartas de Tita"
          className="aspect-[522/46] w-full"
          ajuste={{ alto: 262.02, ancho: 114.2, arriba: -84.09, izquierda: -7.1 }}
        />
      </div>

      {/* Redes */}
      <h2 className="font-expanded mt-16 px-4 text-center text-[32px] font-medium leading-[1.1]">
        Podés encontrarnos
        <span className="font-hand block text-[44px] font-normal leading-none">En nuestras redes</span>
      </h2>
      <div className="mt-7 flex flex-col gap-4 px-5">
        <Revelar>
          <Red href="https://www.instagram.com/noventaycontando/" src="/img/proyectos/instagram.webp" nombre="Instagram" className="h-[150px]" posicion="0% 50%" />
        </Revelar>
        <Revelar>
          <Red href="https://www.tiktok.com/@noventaycontando" src="/img/proyectos/tiktok.webp" nombre="TikTok" className="aspect-[1350/760]" />
        </Revelar>
        <Revelar>
          <Red href="https://www.facebook.com/profile.php?id=61574728446390" src="/img/proyectos/facebook.webp" nombre="Facebook" className="aspect-[1350/760]" />
        </Revelar>
      </div>

      {/* Más proyectos */}
      <div className="mt-16 flex flex-col items-center gap-3 px-6">
        <p className="font-expanded text-center text-[32px] font-medium leading-[1.1]">Más proyectos donde</p>
        <Recorte
          src="/img/proyectos/logo-seguimos.png"
          alt="Seguimos Contando"
          className="aspect-[861/55] w-full"
          ajuste={{ alto: 260.67, ancho: 116.94, arriba: -79.78, izquierda: -8.47 }}
        />
      </div>
      <div className="mt-8 flex flex-col gap-8 px-6">
        <Revelar>
          <Proyecto href={LEGISLATURA_URL} src="/img/proyectos/legislatura.webp" nombre="Mención en la Legislatura porteña (video)" etiqueta="VIDEO" />
        </Revelar>
        <Revelar>
          <Proyecto href={FORM_HISTORIA_URL} src="/img/proyectos/historia.webp" nombre="La historia de… (formulario)" etiqueta="FORMULARIO" />
        </Revelar>
      </div>
    </div>
  );
}
