import { Children } from "react";

type Props = {
  children: React.ReactNode;
  /** Espacio entre tarjetas (px del diseño). */
  espacio: number;
  /** Ya no se usa: antes era cuánto asomaba cada tarjeta al apilarse. */
  asoma?: number;
  className?: string;
  /** Título que va arriba de las tarjetas. */
  encabezado?: React.ReactNode;
  /** Separación entre el encabezado y la primera tarjeta (px del diseño). */
  huecoEncabezado?: number;
};

// Lista de tarjetas (Principios institucionales). Antes se apilaban al hacer scroll;
// el cliente pidió que nada se mueva con el scroll, así que ahora bajan normal, una debajo de otra.
export default function Apilado({ children, espacio, className = "", encabezado, huecoEncabezado }: Props) {
  const hijos = Children.toArray(children);
  return (
    <div className={`relative flex flex-col ${className}`} style={{ gap: espacio }}>
      {encabezado && (
        <div style={{ marginBottom: (huecoEncabezado ?? espacio) - espacio }}>{encabezado}</div>
      )}
      {hijos.map((h, i) => (
        <div key={i} className="relative">
          {h}
        </div>
      ))}
    </div>
  );
}
