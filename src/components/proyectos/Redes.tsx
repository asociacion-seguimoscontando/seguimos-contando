/* eslint-disable @next/next/no-img-element */
import Revelar from "../Revelar";

function Tarjeta({
  href,
  src,
  nombre,
  className = "",
}: {
  href: string;
  src: string;
  nombre: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Seguinos en ${nombre}`}
      className={`group relative block h-[361px] overflow-hidden rounded-[25px] shadow-[10px_10px_65px_0px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-1.5 ${className}`}
    >
      <img
        src={src}
        alt=""
        className="pointer-events-none absolute inset-0 size-full max-w-none object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </a>
  );
}

export default function Redes() {
  return (
    <>
      <h2 className="font-expanded absolute left-1/2 top-[1842px] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-[75px] font-medium text-[#e77f22]">
        <span className="block leading-normal">Podés encontrarnos</span>
        <span className="font-hand block text-[75px] font-normal leading-normal">En nuestras redes</span>
      </h2>
      <div className="absolute left-1/2 top-[1962px] flex w-[1312px] -translate-x-1/2 flex-col gap-[40px]">
        <Revelar>
          <Tarjeta
            href="https://www.instagram.com/noventaycontando/"
            src="/img/proyectos/instagram.png"
            nombre="Instagram"
            className="w-full"
          />
        </Revelar>
        <div className="flex h-[361px] gap-[40px]">
          <Revelar className="flex min-w-px flex-1 [&>a]:w-full">
            <Tarjeta
              href="https://www.tiktok.com/@noventaycontando"
              src="/img/proyectos/tiktok.png"
              nombre="TikTok"
            />
          </Revelar>
          <Revelar className="flex min-w-px flex-1 [&>a]:w-full" retraso={0.15}>
            <Tarjeta
              href="https://www.facebook.com/profile.php?id=61574728446390"
              src="/img/proyectos/facebook.png"
              nombre="Facebook"
            />
          </Revelar>
        </div>
      </div>
    </>
  );
}
