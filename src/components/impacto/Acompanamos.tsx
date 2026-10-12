/* eslint-disable @next/next/no-img-element */
import Revelar from "../Revelar";

export const PERFILES = [
  {
    img: "instituciones.webp",
    titulo: "Instituciones",
    texto:
      "Organizaciones que trabajan en longevidad, derechos, cultura, educación, bienestar, tecnología y participación social.",
  },
  {
    img: "personas-mayores.webp",
    titulo: "Personas mayores",
    texto:
      "Entre 70 y 100 años, con historias, talentos, oficios, conocimientos, proyectos o ganas de participar.",
  },
  {
    img: "familias.webp",
    titulo: "Familias",
    texto:
      "Hijos, nietos, estudiantes y jóvenes que quieren aprender, vincularse y construir proyectos intergeneracionales.",
  },
];

export default function Acompanamos() {
  return (
    <div className="absolute left-[100px] top-[2398px] flex w-[1312px] flex-col items-center gap-[40px]">
      <h2 className="h-[65px] w-full text-center uppercase leading-[65px] text-azul-footer">
        <span className="font-expanded text-[40px]">a quiénes </span>
        <span className="font-hand text-[65px]">acompañamos</span>
      </h2>
      <div className="flex w-full items-center gap-[40px]">
        {PERFILES.map((p, i) => (
          <Revelar key={p.titulo} retraso={i * 0.15}>
            <div className="group flex h-[524px] w-[410.667px] items-center rounded-[30px] drop-shadow-[10px_10px_32.5px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-2">
              <div className="relative flex h-full min-w-px flex-1 flex-col items-center justify-end overflow-clip rounded-[25px] p-[20px] shadow-[4px_4px_25px_0px_rgba(0,0,0,0.1)]">
                <img
                  src={`/img/impacto/${p.img}`}
                  alt=""
                  className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[25px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[25px] bg-gradient-to-b from-[rgba(20,20,20,0)] from-50% to-[#141414]"
                />
                <div className="font-expanded relative flex w-full flex-col items-center gap-[10px] text-center text-white">
                  <h3 className="w-full text-[27px] font-semibold leading-[25px]">{p.titulo}</h3>
                  <p className={`flex h-[84px] w-full text-[18px] leading-[21px] tracking-[-0.36px] ${i === 1 ? "items-start" : "items-center"} justify-center`}><span>{p.texto}</span></p>
                </div>
              </div>
            </div>
          </Revelar>
        ))}
      </div>
    </div>
  );
}
