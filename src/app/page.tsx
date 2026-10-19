import PerfilCard from "@/components/PerfilCard";
import IntroHome from "@/components/home/IntroHome";
import { RUTAS } from "@/lib/site";
import { metaPagina } from "@/lib/seo";

export const metadata = metaPagina({
  titulo: "Seguimos Contando | Asociación civil por las personas mayores",
  descripcion:
    "Seguimos Contando es una ONG y asociación civil que conecta generaciones y promueve la inclusión, la participación y el reconocimiento de las personas mayores.",
  ruta: "/",
});

const perfiles = [
  { slug: "intergeneracional", label: "INTERGENERACIONAL" },
  { slug: "persona-mayor", label: "PERSONA MAYOR" },
  { slug: "organizacion-empresa", label: "ORGANIZACIÓN / EMPRESA" },
];

export default function Home() {
  return (
    <>
    {/* Texto para buscadores: el contenido visible aparece recién después del video. */}
    <div className="sr-only">
      <h1>Seguimos Contando, ONG y asociación civil por las personas mayores</h1>
      <p>
        Seguimos Contando es una ONG y asociación civil que conecta generaciones y promueve la
        inclusión, la participación y el reconocimiento de las personas mayores.
      </p>
    </div>
    {/* Intro con video (una vez por visita) y después los botones sobre el video desenfocado. */}
    <IntroHome>
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center gap-12 px-6 py-16 max-md:gap-8 max-md:px-5 max-md:py-10">
        <h2 className="font-expanded fade-up text-center text-[38px] font-medium italic text-white max-md:text-[25px] max-md:leading-[1.2]">
          Selecciona la opción con la que te identificas
        </h2>

        <div className="flex w-full max-w-[1400px] flex-col gap-[18px] max-lg:max-w-[560px] lg:flex-row">
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
    </>
  );
}
