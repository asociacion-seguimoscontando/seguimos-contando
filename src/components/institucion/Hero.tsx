/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <div className="absolute left-0 top-0 h-[740px] w-[1512px] overflow-clip">
      <img
        src="/img/institucion/hero-fondo.png"
        alt=""
        className="pointer-events-none absolute inset-0 size-full max-w-none object-cover"
      />
      <h1 className="font-expanded absolute left-1/2 top-[184.7px] w-max -translate-x-1/2 whitespace-nowrap text-center text-[70px] font-semibold tracking-[-0.5px] text-crema">
        <span className="block leading-[85.8px]">
          Una <span className="font-hand text-[90px] font-normal">asociación civil</span> por
        </span>
        <span className="block leading-[85.8px]">la dignidad y la memoria viva.</span>
      </h1>
      <p className="font-expanded absolute left-1/2 top-[382px] w-[1144px] -translate-x-1/2 text-center text-[26px] leading-[34px] text-crema">
        Promovemos la inclusión, la participación y el reconocimiento de las personas mayores a través de proyectos culturales, educativos y comunitarios.
      </p>
    </div>
  );
}
