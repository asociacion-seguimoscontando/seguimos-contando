import Link from "next/link";

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

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-16">
        <h1 className="font-expanded fade-up text-center text-[38px] font-medium italic text-white">
          Selecciona la opción con la que te identificas
        </h1>

        <div className="flex w-full max-w-[1312px] flex-col gap-[18px] md:flex-row">
          {perfiles.map((p, i) => (
            <Link
              key={p.slug}
              href={`/contacto?soy=${p.slug}`}
              className="fade-up flex flex-1 flex-col items-center justify-center gap-[6px] rounded-[22px] border border-white/50 bg-white/10 px-[26px] py-[71px] backdrop-blur-[2px] transition hover:bg-white/20"
              style={{ animationDelay: `${0.15 * (i + 1)}s` }}
            >
              <span className="font-expanded -rotate-[5deg] text-[33px] text-white">
                SOY
              </span>
              <span className="font-[family-name:var(--font-reenie)] text-[41px] text-center text-white">
                {p.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
