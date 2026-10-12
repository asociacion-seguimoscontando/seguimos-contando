/* eslint-disable @next/next/no-img-element */
import Revelar from "../Revelar";

// Misión / Visión / Propósito: tres papeles con cinta.
function Papel({
  titulo,
  tituloIzq,
  tituloTop,
  textoIzq,
  textoAncho,
  textoAlto,
  tamano,
  children,
  retraso,
}: {
  titulo: string;
  tituloIzq: number;
  tituloTop: number;
  textoIzq: number;
  textoAncho: number;
  textoAlto?: number;
  tamano: number;
  children: React.ReactNode;
  retraso: number;
}) {
  return (
    <Revelar retraso={retraso}>
      <div className="group relative h-[559px] w-[419px] transition-transform duration-300 hover:-rotate-1 hover:-translate-y-2">
        <img
          src="/img/inicio/nota.webp"
          alt=""
          className="absolute inset-0 size-full max-w-none object-bottom drop-shadow-[10px_10px_45px_rgba(0,0,0,0.4)]"
        />
        <h3
          className="font-hand absolute whitespace-nowrap text-[62px] uppercase leading-none text-azul-footer"
          style={{ left: tituloIzq, top: tituloTop }}
        >
          {titulo}
        </h3>
        <div
          className="font-expanded absolute flex items-center justify-center text-center text-azul-footer"
          style={{
            left: textoIzq,
            top: 170,
            width: textoAncho,
            height: textoAlto,
            fontSize: tamano,
            lineHeight: "26px",
          }}
        >
          <p>{children}</p>
        </div>
      </div>
    </Revelar>
  );
}

export function papeles(): React.ReactNode[] {
  return [
      <Papel
        key="Misión"
        titulo="Misión"
        tituloIzq={116.5}
        tituloTop={88}
        textoIzq={34.5}
        textoAncho={352}
        tamano={19}
        retraso={0}
      >
        <span className="font-medium">Promover</span>
        <span className="font-bold"> la participación activa, la inclusión y el reconocimiento social </span>
        <span className="font-medium">de las personas mayores mediante proyectos culturales, educativos, comunicacionales y comunitarios que </span>
        <span className="font-bold">recuperen historias</span>
        <span className="font-medium"> de vida, generen encuentros entre generaciones, prevengan la soledad y contribuyan a combatir el edadismo.</span>
      </Papel>,

      <Papel
        key="Visión"
        titulo="Visión"
        tituloIzq={125.44}
        tituloTop={88}
        textoIzq={29.24}
        textoAncho={350}
        textoAlto={312}
        tamano={21}
        retraso={0.15}
      >
        <span className="font-medium">Ser una organización de referencia en Iberoamérica en la construcción de una </span>
        <span className="font-bold">nueva cultura de la longevidad</span>
        <span className="font-medium">, impulsando </span>
        <span className="font-bold">sociedades más inclusivas</span>
        <span className="font-medium">, </span>
        <span className="font-bold">participativas e intergeneracionales</span>
        <span className="font-medium">, donde las personas mayores tengan voz, lugar, comunidad y oportunidades reales de participación.</span>
      </Papel>,

      <Papel
        key="Propósito"
        titulo="Propósito"
        tituloIzq={90}
        tituloTop={97}
        textoIzq={40}
        textoAncho={339}
        tamano={21}
        retraso={0.3}
      >
        <span className="font-medium">Contribuir a </span>
        <span className="font-bold">la construcción de una sociedad más inclusiva e intergeneracional</span>
        <span className="font-medium">, donde las personas mayores sean reconocidas como protagonistas, portadoras de memoria, experiencia y saberes fundamentales para </span>
        <span className="font-bold">fortalecer los vínculos comunitarios y el bienestar colectivo</span>
      </Papel>,
  ];
}

export default function Pilares() {
  return (
    <div className="absolute left-[100px] top-[1378px] flex w-[1312px] items-center justify-between">
      {papeles()}
    </div>
  );
}
