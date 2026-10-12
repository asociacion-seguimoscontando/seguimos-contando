/* eslint-disable @next/next/no-img-element */
import Recorte from "../Recorte";
import { FORM_MAS_90_URL } from "@/lib/site";

// Placa "¿Tenés +90 años?": lleva al formulario (se abre en otra pestaña).
export default function PlacaForms() {
  return (
    <div className="absolute left-[100px] top-[2837px] flex h-[440px] w-[1312px] flex-col items-center gap-[40px]">
      <div className="flex items-start gap-[40px]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="relative h-[66.612px] w-[22.977px]">
            <img
              src="/img/inicio/flecha-forms.svg"
              alt=""
              className="rebote absolute inset-[0_-2.09%_-3.18%_-5.01%] block size-full max-w-none"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          </div>
        ))}
      </div>

      <a
        href={FORM_MAS_90_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="¿Tenés +90 años? Completá el formulario"
        className="relative flex h-[334px] w-full flex-col rounded-[45px] drop-shadow-[10px_10px_22.5px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.015]"
      >
        <Recorte
          src="/img/inicio/forms-placa.webp"
          className="w-full flex-1 rounded-[40px]"
          ajuste={{ alto: 130.39, ancho: 114.18, arriba: -14.11, izquierda: -6.77 }}
        />
        <div className="absolute left-[-54.95px] top-[-28.59px] flex h-[116.781px] w-[217.912px] items-center justify-center">
          <div className="-rotate-[21.38deg]">
            <div className="rounded-[110px] border border-white bg-azul-footer px-[23.194px] py-[6.958px]">
              <p className="font-expanded whitespace-nowrap text-[22px] font-medium tracking-[-2.2px] text-white">
                FORMULARIO
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
