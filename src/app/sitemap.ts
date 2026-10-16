import type { MetadataRoute } from "next";
import { PAGINAS_INDEXABLES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGINAS_INDEXABLES.map((ruta) => ({
    url: `${SITE_URL}${ruta === "/" ? "" : ruta}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: ruta === "/" || ruta === "/inicio" ? 1 : 0.8,
  }));
}
