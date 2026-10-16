import type { Metadata } from "next";
import { Archivo, Reenie_Beanie, Barlow } from "next/font/google";
import "./globals.css";
import { DATOS_ESTRUCTURADOS, NOMBRE, SITE_URL } from "@/lib/seo";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  variable: "--font-archivo",
});
const reenie = Reenie_Beanie({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-reenie",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow",
});

const DESCRIPCION =
  "Asociación civil que promueve la inclusión y el reconocimiento de las personas mayores.";

// La imagen de vista previa (WhatsApp, redes) y los íconos salen de los archivos
// opengraph-image.jpg, twitter-image.jpg, icon.png, apple-icon.png y favicon.ico de esta carpeta.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: NOMBRE,
  applicationName: NOMBRE,
  description: DESCRIPCION,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Seguimos Contando",
    title: "Seguimos Contando · Asociación Civil",
    description: "Conectamos generaciones para construir una sociedad para todas las edades.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seguimos Contando · Asociación Civil",
    description: "Conectamos generaciones para construir una sociedad para todas las edades.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${archivo.variable} ${reenie.variable} ${barlow.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(DATOS_ESTRUCTURADOS) }}
        />
        {children}
      </body>
    </html>
  );
}