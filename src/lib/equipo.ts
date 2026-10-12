// Integrantes del equipo (textos tal cual el Figma).
// Para poner la foto de cada persona: guardala en public/img/equipo/ (ej. guadalupe.jpg)
// y completá el campo "foto" con "/img/equipo/guadalupe.jpg". Si no hay foto, se usa la silueta.

export type Integrante = {
  nombre: string;
  rol: string;
  descripcion: string;
  foto?: string;
};

export const INTEGRANTES: Integrante[] = [
  {
    nombre: "Guillermo Camurati",
    rol: "Administración",
    descripcion: "Gestiona y cuida los recursos para que cada proyecto sea posible",
  },
  {
    nombre: "Kiara Iacovella",
    rol: "Comunicación",
    descripcion: "Cuenta nuestras historias y conecta con las personas a tráves de la palabra",
  },
  {
    nombre: "Matias Javier La Volpe",
    rol: "Diseño y Audiovisual",
    descripcion: "Diseña y produce piezas audiovisuales que transmiten el corazón de lo que hacemos",
  },
  {
    nombre: "Guadalupe Camurati",
    rol: "Dirección general",
    descripcion:
      "Fundadora, comunicadora, productora y gestora cultural. Impulsa proyectos que visibilizan y ponen en valor las historias de vida",
  },
  {
    nombre: "Florencia Fantin",
    rol: "Desarrollo Institucional",
    descripcion: "Diseña e impulsa estrategias para el crecimiento y sostenibilidad de la asociación",
  },
  {
    nombre: "Milagros Riotorto",
    rol: "Alianzas",
    descripcion: "Construye alianzas y redes que potencian nuestro impacto social en los medios digitales",
  },
  {
    nombre: "Mario Suárez",
    rol: "Fortalecimiento Institucional",
    descripcion: "Acompaña el desarrollo de capacitaciones en organizaciones y comunidades",
  },
];
