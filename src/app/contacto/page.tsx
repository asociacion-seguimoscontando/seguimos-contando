import { Suspense } from "react";

const perfiles: Record<string, string> = {
  intergeneracional: "Intergeneracional",
  "persona-mayor": "Persona mayor",
  "organizacion-empresa": "Organización / Empresa",
};

async function Perfil({
  searchParams,
}: {
  searchParams: Promise<{ soy?: string }>;
}) {
  const { soy } = await searchParams;
  const perfil = (soy && perfiles[soy]) || "";

  return (
    <p className="font-expanded text-2xl">
      Contacto · Soy: {perfil || "(sin seleccionar)"}
    </p>
  );
}

export default function Contacto({
  searchParams,
}: {
  searchParams: Promise<{ soy?: string }>;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <Suspense fallback={<p className="font-expanded text-2xl">Cargando…</p>}>
        <Perfil searchParams={searchParams} />
      </Suspense>
    </main>
  );
}