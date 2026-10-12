import Revelar from "../Revelar";

export const PRINCIPIOS: { titulo: string; texto: string; derecha: number; num: number }[] = [
  {
    titulo: "Dignidad y derechos",
    texto:
      "Reconocemos a las personas mayores como sujetos plenos de derechos, promoviendo su autonomía, participación y bienestar a lo largo de toda la vida.",
    derecha: 220,
    num: 1,
  },
  {
    titulo: "Intergeneracionalidad y comunidad",
    texto:
      "Impulsamos el encuentro, el diálogo y la colaboración entre generaciones para fortalecer los vínculos sociales y construir comunidades más solidarias e inclusivas.",
    derecha: 230,
    num: 2,
  },
  {
    titulo: "Inclusión y diversidad",
    texto:
      "Valoramos la diversidad de trayectorias, identidades y formas de envejecer, promoviendo entornos accesibles, respetuosos y libres de discriminación.",
    derecha: 231,
    num: 3,
  },
  {
    titulo: "Memoria viva y participación",
    texto:
      "Preservamos y difundimos las historias, saberes y experiencias de las personas mayores, promoviendo su protagonismo en la vida cultural, educativa y comunitaria.",
    derecha: 230,
    num: 4,
  },
  {
    titulo: "Innovación e impacto social",
    texto:
      "Desarrollamos iniciativas creativas y sostenibles que contribuyan a transformar la mirada sobre la vejez, combatir el edadismo y generar cambios positivos en la sociedad.",
    derecha: 231,
    num: 5,
  },
];

export default function Principios() {
  return (
    <div className="absolute left-0 top-[1880px] flex w-[1512px] flex-col gap-[35px] px-[100px] pb-[140px] pt-[80px]">
      <div className="flex w-full flex-col gap-[15px] text-center uppercase text-azul-footer">
        <span className="font-hand text-[65px] leading-none">Principios institucionales</span>
        <span className="font-expanded text-[54px] leading-[normal]">Cinco principios, un mismo rumbo</span>
      </div>

      <div className="flex w-full flex-col gap-[30px]">
        {PRINCIPIOS.map((p) => (
          <Revelar key={p.num}>
            <article className="group relative flex w-full flex-col justify-center overflow-clip rounded-[26.601px] bg-crema px-[40px] py-[60px] text-azul-footer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0px_14px_30px_rgba(0,0,0,0.18)]">
              <div className="flex w-[972px] flex-col gap-[15px]">
                <h3 className="font-hand text-[74px] leading-none">{p.titulo}</h3>
                <p className="font-expanded text-[22px] font-medium leading-[30px]">{p.texto}</p>
              </div>
              {/* Óvalo y número */}
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-100px] top-1/2 h-[299px] w-[360px] -translate-y-1/2 rounded-[119.704px] bg-[#e5d4bf] shadow-[inset_0px_0px_25px_0px_rgba(0,0,0,0.15)]"
              />
              <span
                aria-hidden
                className="font-expanded absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[125px] font-extrabold leading-[normal] tracking-[-6.6502px] transition-transform duration-300 group-hover:scale-110"
                style={{ left: 1312 - p.derecha }}
              >
                {String(p.num).padStart(2, "0")}
              </span>
            </article>
          </Revelar>
        ))}
      </div>
    </div>
  );
}
