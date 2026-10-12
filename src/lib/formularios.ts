// Definición de los 3 formularios de Contacto (uno por perfil).
// La usan el formulario (cliente) y la API (servidor), así validan lo mismo.

export type Perfil = "intergeneracional" | "persona-mayor" | "organizacion-empresa";

export type Campo =
  | {
      tipo: "texto";
      nombre: string;
      etiqueta: string;
      placeholder: string;
      requerido?: boolean;
      entrada?: "texto" | "email" | "numero";
    }
  | { tipo: "chips"; nombre: string; etiqueta: string; opciones: string[] }
  | { tipo: "area"; nombre: string; etiqueta: string; placeholder: string };

export type Formulario = {
  perfil: Perfil;
  etiquetaSoy: string; // lo que se ve en el campo "Soy:"
  hoja: string; // pestaña de la planilla de Google
  tema: "crema" | "blanco"; // color de bordes y textos (según Figma)
  campos: Campo[];
};

const ORIGEN_PLACEHOLDER = "LinkedIn, Instagram, Prensa, Evento, Otro.";

export const FORMULARIOS: Record<Perfil, Formulario> = {
  intergeneracional: {
    perfil: "intergeneracional",
    etiquetaSoy: "Intergeneracional",
    hoja: "Intergeneracional",
    tema: "crema",
    campos: [
      { tipo: "texto", nombre: "nombre", etiqueta: "¿Cual es tu nombre?", placeholder: "Ingresa tu nombre completo", requerido: true },
      { tipo: "texto", nombre: "contacto", etiqueta: "¿Cómo podemos contactarte?", placeholder: "Ingresa tu email o número de telefono" },
      { tipo: "texto", nombre: "edad", etiqueta: "¿Qué edad tenes?", placeholder: "Ingresa tu edad en numero", entrada: "numero" },
      { tipo: "texto", nombre: "origen", etiqueta: "¿Cómo conociste Seguimos Contando?", placeholder: ORIGEN_PLACEHOLDER },
      {
        tipo: "chips",
        nombre: "participacion",
        etiqueta: "¿Cómo te gustaría ser parte?",
        opciones: [
          "Voluntariado",
          "Eventos y encuentros",
          "Talleres",
          "Compartir historia familiar",
          "Recibir novedades",
          "Colaborar profesionalmente",
          "Otro",
        ],
      },
    ],
  },
  "persona-mayor": {
    perfil: "persona-mayor",
    etiquetaSoy: "Persona mayor",
    hoja: "Persona mayor",
    tema: "blanco",
    campos: [
      { tipo: "texto", nombre: "nombre", etiqueta: "¿Cual es tu nombre?", placeholder: "Ingresa tu nombre completo", requerido: true },
      { tipo: "texto", nombre: "contacto", etiqueta: "¿Cómo podemos contactarte?", placeholder: "Ingresa tu email o número de telefono" },
      { tipo: "texto", nombre: "edad", etiqueta: "¿Qué edad tenes?", placeholder: "Ingresa tu edad en numero", entrada: "numero" },
      { tipo: "texto", nombre: "ubicacion", etiqueta: "¿Dónde vivís?", placeholder: "País + Ciudad" },
      { tipo: "texto", nombre: "origen", etiqueta: "¿Cómo conociste Seguimos Contando?", placeholder: ORIGEN_PLACEHOLDER },
      {
        tipo: "chips",
        nombre: "interes",
        etiqueta: "¿Qué te gustaría hacer con nosotros?",
        opciones: [
          "Compartir mi historia",
          "Participar de encuentros",
          "Talleres o clases",
          "Conocer gente / comunidad",
          "Participar de contenidos",
          "Otro",
        ],
      },
    ],
  },
  "organizacion-empresa": {
    perfil: "organizacion-empresa",
    etiquetaSoy: "Empresa / Organización",
    hoja: "Organización-Empresa",
    tema: "blanco",
    campos: [
      { tipo: "texto", nombre: "nombre", etiqueta: "¿Quién sos y de qué organización formás parte?", placeholder: "Ingresa tu nombre completo", requerido: true },
      { tipo: "texto", nombre: "email", etiqueta: "Correo electronico", placeholder: "tu@email.com", entrada: "email" },
      { tipo: "texto", nombre: "organizacion", etiqueta: "¿Qué tipo de organización es y dónde está?", placeholder: "Empresa + País" },
      { tipo: "texto", nombre: "origen", etiqueta: "¿Cómo conocieron Seguimos Contando?", placeholder: ORIGEN_PLACEHOLDER },
      {
        tipo: "chips",
        nombre: "colaboracion",
        etiqueta: "¿De qué manera les interesaría colaborar?",
        opciones: [
          "Financiamiento",
          "Sponsor",
          "Actividad conjunta",
          "Alianza institucional",
          "Espacios",
          "Difusión",
          "Productos o servicios",
          "Otro",
        ],
      },
      {
        tipo: "area",
        nombre: "mensaje",
        etiqueta: "¿Qué les gustaría construir junto a nosotros?",
        placeholder: "Contanos tu idea, propuesta o pregunta para tener información cuando te contactemos",
      },
    ],
  },
};

export const PERFILES = Object.keys(FORMULARIOS) as Perfil[];

export function esPerfil(valor: unknown): valor is Perfil {
  return typeof valor === "string" && valor in FORMULARIOS;
}

export type Respuestas = Record<string, string | string[]>;

const MAX_TEXTO = 1000;
const MAX_AREA = 3000;

/** Devuelve { campo: mensaje } con los errores; vacío si todo está bien. */
export function validar(f: Formulario, r: Respuestas): Record<string, string> {
  const errores: Record<string, string> = {};
  for (const c of f.campos) {
    if (c.tipo === "chips") continue;
    const v = r[c.nombre];
    const s = typeof v === "string" ? v.trim() : "";

    if (c.tipo === "texto" && c.requerido && !s) {
      errores[c.nombre] = "Este campo es obligatorio.";
      continue;
    }
    if (!s || c.tipo !== "texto") continue;

    if (c.entrada === "numero") {
      const n = Number(s);
      if (!Number.isInteger(n) || n < 0 || n > 120) {
        errores[c.nombre] = "Ingresá una edad válida.";
      }
    }
    if (c.entrada === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) {
      errores[c.nombre] = "Ingresá un email válido.";
    }
  }
  return errores;
}

/** Deja solo los campos conocidos, recortados, en el orden del formulario. */
export function normalizar(f: Formulario, r: Respuestas) {
  const columnas: string[] = ["Soy"];
  const valores: string[] = [f.etiquetaSoy];

  for (const c of f.campos) {
    columnas.push(c.etiqueta);
    const v = r[c.nombre];

    if (c.tipo === "chips") {
      const elegidas = Array.isArray(v)
        ? v.filter((x): x is string => typeof x === "string" && c.opciones.includes(x))
        : [];
      valores.push(elegidas.join(", "));
    } else {
      const limite = c.tipo === "area" ? MAX_AREA : MAX_TEXTO;
      valores.push(typeof v === "string" ? v.trim().slice(0, limite) : "");
    }
  }
  return { columnas, valores };
}
