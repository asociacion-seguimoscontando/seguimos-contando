/* eslint-disable @next/next/no-img-element */

// Muestra una imagen recortada igual que en Figma: el recorte se define con
// porcentajes (alto / ancho / arriba / izquierda) relativos a la caja.
type Ajuste = { alto: number; ancho: number; arriba: number; izquierda: number };

type Props = {
  src: string;
  alt?: string;
  className?: string;
  ajuste: Ajuste;
  /**
   * "figma" = estira la imagen exactamente al recorte, como hace Figma en modo "Crop"
   * (necesario cuando la proporción del archivo no coincide con la del recorte).
   * Por defecto "cubrir" (object-cover), que nunca deforma.
   */
  modo?: "cubrir" | "figma";
};

export default function Recorte({ src, alt = "", className = "", ajuste, modo = "cubrir" }: Props) {
  // Si quien lo usa ya define la posición (absolute, etc.) no se fuerza "relative":
  // pisaría a "absolute" y la imagen quedaría corrida.
  const posicion = /(^|\s)(absolute|fixed|relative|sticky)(\s|$)/.test(className) ? "" : "relative";
  return (
    <div className={`${posicion} overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`absolute max-w-none ${modo === "figma" ? "object-fill" : "object-cover"}`}
        style={{
          height: `${ajuste.alto}%`,
          width: `${ajuste.ancho}%`,
          top: `${ajuste.arriba}%`,
          left: `${ajuste.izquierda}%`,
        }}
      />
    </div>
  );
}
