/* eslint-disable @next/next/no-img-element */
import Recorte from "../Recorte";
import Revelar from "../Revelar";

type Ajuste = { alto: number; ancho: number; arriba: number; izquierda: number };

const PLATAFORMAS: {
  nombre: string;
  href: string;
  foto: string;
  barra: string;
  logo: string;
  ajusteLogo: Ajuste;
  logoIzq: string;
  logoAncho: string;
  logoTop: number;
  logoAlto: number;
}[] = [
  {
    nombre: "YouTube",
    href: "https://www.youtube.com/@Noventaycontando",
    foto: "youtube.png",
    barra: "#ff0401",
    logo: "youtube-logo.png",
    ajusteLogo: { alto: 420.07, ancho: 170.09, arriba: -160.03, izquierda: -35.04 },
    logoIzq: "38.79%",
    logoAncho: "22.42%",
    logoTop: 14,
    logoAlto: 29,
  },
  {
    nombre: "Spotify",
    href: "https://open.spotify.com/show/4BFwLxfkOEAKFFiv4q54Kd",
    foto: "spotify.png",
    barra: "#1ed75f",
    logo: "spotify-logo.png",
    ajusteLogo: { alto: 318.18, ancho: 129.88, arriba: -109.09, izquierda: -14.94 },
    logoIzq: "38.97%",
    logoAncho: "22.06%",
    logoTop: 10,
    logoAlto: 37,
  },
  {
    nombre: "Apple Podcasts",
    href: "https://podcasts.apple.com/ar/podcast/noventa-y-contando/id1837235879",
    foto: "apple.png",
    barra: "#8b32c8",
    logo: "apple-logo.png",
    ajusteLogo: { alto: 536.25, ancho: 165.51, arriba: -216.12, izquierda: -34.03 },
    logoIzq: "36.05%",
    logoAncho: "27.74%",
    logoTop: 14,
    logoAlto: 29,
  },
];

// Los tres botones del podcast (YouTube, Spotify, Apple Podcasts).
export default function Plataformas() {
  return (
    <div className="absolute left-[832px] top-[213px] flex w-[580px] flex-col gap-[40px]">
      {PLATAFORMAS.map((p, i) => (
        <Revelar key={p.nombre} retraso={i * 0.15}>
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Escuchá el podcast en ${p.nombre}`}
            className="relative block h-[261px] w-full drop-shadow-[10px_10px_32.5px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5 hover:scale-[1.02]"
          >
            <img
              src={`/img/proyectos/${p.foto}`}
              alt=""
              className="pointer-events-none absolute left-0 top-0 h-[239px] w-full max-w-none rounded-t-[25px] object-cover"
            />
            <div
              className="absolute bottom-0 left-0 h-[57px] w-full rounded-b-[25px]"
              style={{ background: p.barra }}
            >
              <div
                className="absolute"
                style={{
                  left: p.logoIzq,
                  top: p.logoTop,
                  width: p.logoAncho,
                  height: p.logoAlto,
                }}
              >
                <Recorte
                  src={`/img/proyectos/${p.logo}`}
                  alt={p.nombre}
                  className="h-full w-full"
                  ajuste={p.ajusteLogo}
                />
              </div>
            </div>
          </a>
        </Revelar>
      ))}
    </div>
  );
}
