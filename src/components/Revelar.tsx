// Antes hacía aparecer el contenido con fade + slide al hacer scroll. El cliente pidió que
// nada se mueva con el scroll, así que ahora solo envuelve el contenido (se mantiene la
// misma API para no tocar cada página; "retraso" y "desde" ya no tienen efecto).
export default function Revelar({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  retraso?: number;
  desde?: "abajo" | "izquierda" | "derecha";
}) {
  return <div className={className}>{children}</div>;
}
