import PerfilCard from "@/components/PerfilCard";
import IntroHome from "@/components/home/IntroHome";
import { RUTAS } from "@/lib/site";

const perfiles = [
  { slug: "intergeneracional", label: "INTERGENERACIONAL" },
  { slug: "persona-mayor", label: "PERSONA MAYOR" },
  { slug: "organizacion-empresa", label: "ORGANIZACIÓN / EMPRESA" },
];

export default function Home() {
  return (
    // Intro con video (una vez por visita) y después los botones sobre el video desenfocado.
    <IntroHome>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-16 max-md:gap-8 max-md:px-5 max-md:py-10">
        <h1 className="font-expanded fade-up text-center text-[38px] font-medium italic text-white max-md:text-[25px] max-md:leading-[1.2]">
          Selecciona la opción con la que te identificas
        </h1>

        <div className="flex w-full max-w-[1312px] flex-col gap-[18px] md:flex-row">
          {perfiles.map((p, i) => (
            <PerfilCard
              key={p.slug}
              slug={p.slug}
              label={p.label}
              destino={RUTAS.inicio}
              retraso={0.15 * (i + 1)}
            />
          ))}
        </div>
      </div>
    </IntroHome>
  );
}
