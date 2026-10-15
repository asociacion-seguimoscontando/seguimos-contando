/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import PageShell from "@/components/PageShell";
import ContactoForm from "@/components/ContactoForm";
import TarjetaContacto from "@/components/TarjetaContacto";
import Recorte from "@/components/Recorte";
import { EMAIL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/site";

export const metadata = { title: "Contacto | Seguimos Contando" };

export default function Contacto() {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-[1312px] px-6 pb-0 pt-[140px] lg:pt-[173px]">
        <h1 className="font-expanded text-center font-bold leading-[1.05] text-crema lg:h-[80px] lg:whitespace-nowrap lg:leading-[80px]">
          <span className="text-[32px] sm:text-[50px]">Ponete en </span>
          <span className="font-hand text-[56px] font-normal max-lg:block sm:text-[80px]">contacto</span>
          <span className="font-hand font-normal max-lg:hidden lg:text-[70px] lg:tracking-[-12px]"> </span>
          <span className="text-[32px] sm:text-[50px]">con nosotros</span>
        </h1>

        <div className="mt-10 flex flex-col items-center gap-14 lg:mt-[83px] lg:gap-[80px] lg:flex-row lg:items-start lg:justify-center">
          <div className="flex w-full justify-center lg:w-[634px] lg:shrink-0">
            <Suspense
              fallback={
                <div className="h-[700px] w-full max-w-[634px] rounded-[30px] bg-white/10" />
              }
            >
              <ContactoForm />
            </Suspense>
          </div>

          <div className="mt-[43px] flex w-full max-w-[598px] flex-col gap-[83px] lg:mt-0 lg:w-[598px] lg:shrink-0">
            <TarjetaContacto
              href={WHATSAPP_URL}
              externo
              marco="/img/marco-whatsapp.svg"
              etiqueta="Canal “Las Cartas De Tita”"
              accion="Ir al canal de Whatsapp →"
              icono={
                <img
                  src="/img/icono-whatsapp.svg"
                  alt=""
                  className="absolute left-1/2 top-[-43px] size-[86px] -translate-x-1/2"
                />
              }
            />
            <TarjetaContacto
              href={`mailto:${EMAIL}`}
              marco="/img/marco-email.svg"
              etiqueta={EMAIL}
              accion="Ir al email →"
              icono={
                <img
                  src="/img/icono-email.svg"
                  alt=""
                  className="absolute left-1/2 top-[-32.5px] h-[65px] w-[86px] -translate-x-1/2"
                />
              }
            />
            <TarjetaContacto
              href={LINKEDIN_URL}
              externo
              marco="/img/marco-linkedin.svg"
              etiqueta="LinkedIn “Seguimos Contando”"
              etiquetaNegrita
              accion="Seguinos →"
              icono={
                <div className="absolute left-1/2 top-[-43px] size-[86px] -translate-x-1/2">
                  <img
                    src="/img/icono-linkedin-circulo.svg"
                    alt=""
                    className="absolute inset-0 size-full"
                  />
                  <img
                    src="/img/icono-linkedin-in.svg"
                    alt=""
                    className="absolute left-[23.51px] top-[19.59px] h-[36.683px] w-[38.989px]"
                  />
                </div>
              }
            />

            <Recorte
              src="/img/polaroid.webp"
              alt="Dos personas mirando juntas un celular"
              className="mt-[-23px] aspect-[598/513] w-full max-md:mb-[calc(100px+8.9vw)]"
              ajuste={{ alto: 144.51, ancho: 100.93, arriba: -23.75, izquierda: -0.37 }}
              modo="figma"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
