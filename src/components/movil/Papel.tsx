/* eslint-disable @next/next/no-img-element */

// Papel de fondo para celular: textura crema + borde roto arriba (se apoya sobre la sección anterior).
export default function PapelMovil({
  children,
  className = "",
  borde = true,
  sube = 62,
}: {
  children: React.ReactNode;
  className?: string;
  borde?: boolean;
  /** Cuánto se superpone con la sección de arriba (px). */
  sube?: number;
}) {
  return (
    <div
      className={`relative bg-[#f5e6d1] bg-[length:100%_auto] ${className}`}
      style={{
        backgroundImage: "url(/img/movil/papel-textura.webp)",
        marginTop: borde ? -sube : undefined,
      }}
    >
      {borde && (
        <img
          src="/img/movil/papel-borde.webp"
          alt=""
          className="pointer-events-none absolute inset-x-0 top-0 h-auto w-full -translate-y-[calc(100%-1px)] [filter:drop-shadow(0_-6px_10px_rgba(0,0,0,0.25))] [clip-path:inset(-40px_0_0_0)]"
        />
      )}
      {children}
    </div>
  );
}
