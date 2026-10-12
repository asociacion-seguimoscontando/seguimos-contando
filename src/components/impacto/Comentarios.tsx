import Recorte from "../Recorte";

// Mensajes de la comunidad: capturas que pasan solas (pausa al pasar el mouse).
export const CAPTURAS = [
  { src: "comentario-1.png", ajuste: { alto: 209.5, ancho: 120.91, arriba: -20.41, izquierda: -12.13 } },
  { src: "comentario-2.png", ajuste: { alto: 214.59, ancho: 123.85, arriba: -67.81, izquierda: -13.08 } },
  { src: "comentario-3.png", ajuste: { alto: 209.68, ancho: 121.02, arriba: -45.55, izquierda: -12.77 } },
  { src: "comentario-4.png", ajuste: { alto: 217.26, ancho: 125.39, arriba: -61.84, izquierda: -14.75 } },
  { src: "comentario-5.png", ajuste: { alto: 208.3, ancho: 120.22, arriba: -51.44, izquierda: -12.64 } },
];

export default function Comentarios() {
  return (
    <div className="absolute left-0 top-[3167px] flex w-[1512px] flex-col items-center gap-[40px]">
      <h2 className="h-[65px] w-full text-center uppercase leading-[65px] text-azul-footer">
        <span className="font-expanded text-[40px]">Mensajes de la </span>
        <span className="font-hand text-[65px]">comunidad</span>
      </h2>
      <div className="-my-[60px] w-full overflow-hidden py-[60px]">
        <div
          className="marquee flex w-max gap-[48.941px] pr-[48.941px]"
          style={{ ["--dur" as string]: "50s" }}
        >
          {[...CAPTURAS, ...CAPTURAS].map((c, i) => (
            <div
              key={i}
              className="h-[520px] w-[416px] shrink-0 rounded-[24.471px] shadow-[10px_10px_65px_0px_rgba(0,0,0,0.2)]"
            >
              <Recorte
                src={`/img/impacto/${c.src}`}
                alt="Mensaje de una persona de la comunidad"
                className="h-full w-full rounded-[24.471px]"
                ajuste={c.ajuste}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
