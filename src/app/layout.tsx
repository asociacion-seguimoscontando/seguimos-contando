import type { Metadata } from "next";
import { Archivo, Reenie_Beanie, Barlow } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Seguimos Contando",
  description:
    "Asociación civil que promueve la inclusión y el reconocimiento de las personas mayores.",
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
        {children}
      </body>
    </html>
  );
}