import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { esPerfil } from "@/lib/formularios";

// Puerta de entrada: quien llega desde afuera a una página interna (Google, link compartido,
// URL escrita, favorito) vuelve a la raíz: video + "SOY…". La navegación dentro del sitio
// (links, menú, botones SOY y los prefetch de <Link>) son fetch del mismo origen y pasan.
// Ojo: Next quita las cabeceras next-router-* antes de llegar acá (ver docs de proxy), por eso
// no se usan. Una recarga (F5) en Chrome también manda same-origin: se queda en la página.
// Redirect temporal (307) a propósito: uno permanente quedaría guardado en el navegador.
export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname === "/") return NextResponse.next();

  const h = req.headers;
  const origen = h.get("sec-fetch-site");
  if (origen === "same-origin") return NextResponse.next();

  // Sin la cabecera (navegadores viejos; los buscadores tampoco la mandan): pasa si ya eligió
  // perfil o si el pedido viene de una página del sitio (sirve aunque haya cookies bloqueadas).
  if (
    !origen &&
    (esPerfil(req.cookies.get("soy")?.value) ||
      vieneDelSitio(h.get("referer"), req.nextUrl.origin))
  ) {
    return NextResponse.next();
  }

  const aLaRaiz = NextResponse.redirect(new URL("/", req.url), 307);
  aLaRaiz.headers.set("Cache-Control", "private, no-store");
  return aLaRaiz;
}

function vieneDelSitio(referer: string | null, origen: string) {
  if (!referer) return false;
  try {
    return new URL(referer).origin === origen;
  } catch {
    return false;
  }
}

// Solo páginas: quedan afuera /api, _next y cualquier archivo con punto
// (imágenes, video, PDF, sitemap.xml, robots.txt, íconos, archivo de verificación de Google).
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
