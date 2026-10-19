import type { Metadata } from "next";
import { EMAIL, FOOTER_REDES } from "./site";

// Dirección oficial del sitio (sin www). Si cambia el dominio, se cambia solo acá.
export const SITE_URL = "https://seguimoscontando.org";

export const NOMBRE = "Seguimos Contando";

// Imagen de vista previa al compartir (archivos en src/app). Se repite en cada página
// porque Next no la hereda cuando la página define su propio openGraph.
const IMAGEN_ALT =
  "Asociación Civil Seguimos Contando: conectamos generaciones para construir una sociedad para todas las edades.";

// Metadatos de cada página: título, descripción, dirección canónica y vista previa al compartir.
export function metaPagina({
  titulo,
  descripcion,
  ruta,
  indexar = true,
}: {
  titulo: string;
  descripcion: string;
  ruta: string;
  indexar?: boolean;
}): Metadata {
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: NOMBRE,
      title: titulo,
      description: descripcion,
      url: ruta,
      images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: IMAGEN_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
      images: [{ url: "/twitter-image.jpg", alt: IMAGEN_ALT }],
    },
    ...(indexar ? {} : { robots: { index: false, follow: true } }),
  };
}

// Páginas que van al sitemap. Solo la raíz: es la puerta de entrada (video + "SOY…") y
// las páginas internas redirigen a ella si todavía no se eligió un perfil (ver src/proxy.ts).
export const PAGINAS_INDEXABLES = ["/"];

// Ficha de la organización para Google (datos estructurados JSON-LD).
export const DATOS_ESTRUCTURADOS = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": `${SITE_URL}/#organizacion`,
      name: NOMBRE,
      alternateName: ["Asociación Civil Seguimos Contando", "Seguimos Contando ONG", "Noventa y Contando"],
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description:
        "Asociación civil que conecta generaciones y promueve la inclusión, la participación y el reconocimiento de las personas mayores.",
      email: EMAIL,
      sameAs: FOOTER_REDES.map((r) => r.href.replace("?viewAsMember=true", "")),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#sitio`,
      url: SITE_URL,
      name: NOMBRE,
      alternateName: ["Seguimos Contando ONG", "Asociación Civil Seguimos Contando", "seguimoscontando.org"],
      inLanguage: "es-AR",
      publisher: { "@id": `${SITE_URL}/#organizacion` },
    },
  ],
};
