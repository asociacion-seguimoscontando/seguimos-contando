import PerfilCard from "@/components/PerfilCard";
import { RUTAS } from "@/lib/site";

const perfiles = [
  { slug: "intergeneracional", label: "INTERGENERACIONAL" },
  { slug: "persona-mayor", label: "PERSONA MAYOR" },
  { slug: "organizacion-empresa", label: "ORGANIZACIÓN / EMPRESA" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-400">
      {/* Video de fondo con blur */}
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[10px]"
        src="/video/inicio.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay #000000 al 40% (requisito del cliente) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#000000]/40" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-16">
        <h1 className="font-expanded fade-up text-center text-[38px] font-medium italic text-white">
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
    </main>
  );
}
