import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { esPerfil } from "@/lib/formularios";

// Puerta de entrada: quien todavía no eligió "SOY…" (cookie "soy", que graba PerfilCard)
// y pide cualquier página interna, vuelve a la raíz: video + selección de perfil.
// Así el conteo de perfiles no se saltea y Google solo ve la raíz.
// Redirect temporal (307) a propósito: uno permanente se guardaría en el navegador
// y rompería el acceso de quien elige después.
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/") return NextResponse.next();

  // Los prefetch de los links (ej. el de /inicio en los botones SOY) no se redirigen.
  const h = req.headers;
  const esPrefetch =
    h.has("next-router-prefetch") ||
    h.has("next-router-segment-prefetch") ||
    h.get("purpose") === "prefetch";
  if (esPrefetch) return NextResponse.next();

  if (esPerfil(req.cookies.get("soy")?.value)) return NextResponse.next();

  return NextResponse.redirect(new URL("/", req.url), 307);
}

// Solo páginas: quedan afuera /api, _next y cualquier archivo con punto
// (imágenes, video, PDF, sitemap.xml, robots.txt, íconos).
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
