import { ViewTransition } from "react";

// Cada navegación monta una página nueva dentro de esta plantilla: la anterior se
// desvanece y la nueva aparece con un fade suave (ver ".pagina" en globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="pagina" exit="pagina" default="none">
      {children}
    </ViewTransition>
  );
}
