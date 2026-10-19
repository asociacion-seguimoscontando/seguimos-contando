"use client";

import { useEffect, useRef, useState } from "react";

// La intro se ve una vez por cada carga de la página (entrar desde Google, escribir la URL,
// recargar). Este valor vive en memoria: se reinicia en cada carga completa, pero se mantiene
// si se vuelve a la home navegando dentro del sitio (ej. con el botón "atrás").
let introVista = false;

type Fase = "cargando" | "intro" | "botones";

function leerVista() {
  return introVista;
}
function marcarVista() {
  introVista = true;
}

// Home: en cada carga de la página se ve el video completo (con sonido si el navegador
// lo permite; si no, con un botón visible para activarlo). Al terminar, vuelve a empezar
// sin sonido, desenfocado y con el overlay al 40%, y aparecen los botones "SOY…".
export default function IntroHome({ children }: { children: React.ReactNode }) {
  const video = useRef<HTMLVideoElement>(null);
  const [fase, setFase] = useState<Fase>("cargando");
  const [conSonido, setConSonido] = useState(false);
  const decidido = useRef(false);

  useEffect(() => {
    const v = video.current;
    if (!v || decidido.current) return;
    decidido.current = true;
    if (leerVista()) {
      v.loop = true;
      // La fase depende de algo que solo existe en el navegador, por eso se decide acá.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFase("botones");
      return;
    }
    marcarVista();
    setFase("intro");
    v.loop = false;
    v.currentTime = 0;
    // Primero intenta con sonido; si el navegador lo bloquea, sigue muteado.
    v.muted = false;
    v.play()
      .then(() => setConSonido(true))
      .catch(() => {
        v.muted = true;
        setConSonido(false);
        v.play().catch(() => {});
      });
  }, []);

  const pasarABotones = () => {
    const v = video.current;
    if (v) {
      v.muted = true;
      v.loop = true;
      v.currentTime = 0;
      v.play().catch(() => {});
    }
    setConSonido(false);
    setFase("botones");
  };

  const alternarSonido = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    if (v.paused) v.play().catch(() => {});
    setConSonido(!v.muted);
  };

  const enIntro = fase === "intro";
  const botones = fase === "botones";

  return (
    <main className="relative min-h-svh overflow-hidden bg-neutral-900">
      <video
        ref={video}
        className={`absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-1000 ease-out ${
          botones ? "scale-105 blur-[10px]" : ""
        }`}
        src="/video/inicio.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => {
          if (fase === "intro") pasarABotones();
        }}
      />

      {/* Overlay #000000 al 40% (requisito del cliente) */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 bg-[#000000]/40 transition-opacity duration-1000 ${
          botones ? "opacity-100" : "opacity-0"
        }`}
      />

      {botones && children}

      {enIntro && (
        <button
          type="button"
          onClick={pasarABotones}
          className="font-expanded fade-up absolute bottom-[48px] right-[48px] z-20 rounded-full border border-white/60 bg-black/25 px-[22px] py-[10px] text-[16px] font-medium text-white backdrop-blur-[6px] transition-[background-color,transform] duration-200 hover:scale-[1.04] hover:bg-black/40 max-md:bottom-[34px] max-md:right-[20px] max-md:px-[18px] max-md:py-[9px] max-md:text-[15px]"
        >
          Omitir
        </button>
      )}

      {enIntro && (
        <div className="fade-up pointer-events-none absolute inset-x-0 bottom-[40px] z-10 flex justify-center max-md:bottom-[28px] [&>button]:pointer-events-auto">
          <button
            type="button"
            onClick={alternarSonido}
            aria-pressed={conSonido}
            aria-label={conSonido ? "Silenciar video" : "Activar sonido"}
            title={conSonido ? "Silenciar" : "Activar sonido"}
            className="flex size-[56px] items-center justify-center rounded-full bg-crema text-azul shadow-[0px_6px_20px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.06] max-md:size-[50px]"
          >
            <IconoSonido activo={conSonido} />
          </button>
        </div>
      )}
    </main>
  );
}

function IconoSonido({ activo }: { activo: boolean }) {
  return (
    <svg aria-hidden width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" />
      {activo ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M19 5a10 10 0 0 1 0 14" />
        </>
      ) : (
        <>
          <path d="m23 9-6 6" />
          <path d="m17 9 6 6" />
        </>
      )}
    </svg>
  );
}
