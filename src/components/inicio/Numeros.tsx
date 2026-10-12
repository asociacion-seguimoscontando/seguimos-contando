// Cinta de números que avanza sola (pausa al pasar el mouse).
const ITEMS = [
  { valor: "+400k", etiqueta: "SEGUIDORES" },
  { valor: "+33", etiqueta: "EPISODIOS" },
  { valor: "+1M", etiqueta: "VISUALIZACIONES" },
];

export default function Numeros() {
  // 4 repeticiones del trío: el track se mueve -50% y vuelve a empezar sin saltos.
  const track = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      className="absolute left-0 top-[342px] w-[1512px] overflow-hidden"
      aria-label="Nuestro impacto en números"
    >
      <div
        className="marquee flex w-max gap-[100px] pr-[100px] text-center text-azul-footer"
        style={{ ["--dur" as string]: "36s" }}
      >
        {track.map((n, i) => (
          <div key={i} className="flex shrink-0 flex-col justify-center">
            <p className="font-expanded text-[88px] font-semibold leading-[0.8] tracking-[-1.76px]">
              {n.valor}
            </p>
            <p className="font-expanded text-[37px] font-medium leading-[1.4]">
              {n.etiqueta}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
