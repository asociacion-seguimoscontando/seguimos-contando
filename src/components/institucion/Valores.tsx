import Revelar from "../Revelar";

const VALORES = [
  "Inclusión",
  "Respeto",
  "Dignidad",
  "Intergeneracionalidad",
  "Compromiso Comunitario",
  "Inclusión",
];

function Valor({ n, texto }: { n: number; texto: string }) {
  return (
    <div className="flex w-full shrink-0 flex-col items-center justify-center rounded-[26.601px] bg-crema px-[35px] py-[25px] text-azul-footer">
      <div className="flex flex-col items-center gap-[8px] whitespace-nowrap">
        <span className="font-hand text-[70px] leading-[60px]">
          {String(n).padStart(2, "0")}
        </span>
        <span className="font-expanded text-[34px]">{texto}</span>
      </div>
    </div>
  );
}

// Valores institucionales: texto a la izquierda + lista que sube sola a la derecha.
export default function Valores() {
  return (
    <div className="absolute left-0 top-[1196px] flex w-[1512px] items-center gap-[80px] px-[100px] py-[120px]">
      <Revelar className="flex min-w-px flex-1 flex-col gap-[20px] text-azul-footer">
        <div className="flex flex-col gap-[15px] whitespace-nowrap uppercase">
          <span className="font-hand text-[65px] leading-normal">valores institucionales</span>
          <div className="font-expanded text-[62px] leading-normal">
            <p className="font-semibold">lo que guía,</p>
            <p>cada decisión</p>
          </div>
        </div>
        <p className="font-expanded text-justify text-[23px] font-medium leading-[35px] tracking-[-0.23px]">
          Somos una asociación civil dedicada a promover la inclusión, la participación y el reconocimiento de las personas mayores a través de proyectos culturales, educativos y comunitarios. Trabajamos para preservar la memoria viva y fortalecer los vínculos intergeneracionales.
        </p>
      </Revelar>

      <div
        className="relative h-[444px] w-[580px] shrink-0 overflow-hidden"
        aria-label="Valores institucionales"
      >
        <ul
          className="marquee-v flex w-full flex-col gap-[30px] pb-[30px]"
          style={{ ["--dur" as string]: "28s" }}
        >
          {[...VALORES, ...VALORES].map((v, i) => (
            <li key={i}>
              <Valor n={(i % VALORES.length) + 1} texto={v} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
