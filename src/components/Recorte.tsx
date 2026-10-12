/* eslint-disable @next/next/no-img-element */

// Muestra una imagen recortada igual que en Figma: el recorte se define con
// porcentajes (alto / ancho / arriba / izquierda) relativos a la caja.
type Ajuste = { alto: number; ancho: number; arriba: number; izquierda: number };

type Props = {
  src: string;
  alt?: string;
  className?: string;
  ajuste: Ajuste;
};

export default function Recorte({ src, alt = "", className = "", ajuste }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="absolute max-w-none object-cover"
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
