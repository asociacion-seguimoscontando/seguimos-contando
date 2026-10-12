// Rutas, enlaces y textos compartidos del sitio.
// Los "#" son enlaces que todavía no tenemos: pasame las URLs y se completan acá.

export const RUTAS = {
  inicio: "/inicio",
  institucion: "/institucion",
  impacto: "/impacto",
  proyectos: "/proyectos",
  equipo: "/equipo",
  contacto: "/contacto",
  colaborar: "/colaborar",
} as const;

export const WHATSAPP_URL =
  "https://whatsapp.com/channel/0029VbDfc4NFSAt3uFh0Fh3K";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/seguimoscontandoasociacion/?viewAsMember=true";
// Nuestro equipo: true = tarjetas del equipo, false = cartel "Muy pronto vas a conocer a todo el equipo".
export const EQUIPO_PUBLICADO = true;
// Quiero colaborar: Mercado Pago (datos tomados del Figma; el QR de /img/colaborar apunta al mismo link).
export const MERCADOPAGO_URL = "https://link.mercadopago.com.ar/seguimoscontando";
export const MP_ALIAS = "seguimoscontando";
export const MP_CVU = "0000003100034835824656";
export const EMAIL = "asociacion@seguimoscontando.org";

// Orden del menú superior (según el Figma)
export const NAV_LINKS = [
  { href: RUTAS.inicio, label: "Inicio" },
  { href: RUTAS.institucion, label: "Institución" },
  { href: RUTAS.impacto, label: "Impacto" },
  { href: RUTAS.proyectos, label: "Nuestros proyectos" },
  { href: RUTAS.equipo, label: "Nuestro equipo" },
  { href: RUTAS.contacto, label: "Contacto" },
];

// Orden de la columna "Navegación" del footer (según el Figma)
export const FOOTER_NAV = [
  { href: RUTAS.inicio, label: "Inicio" },
  { href: RUTAS.institucion, label: "Institución" },
  { href: RUTAS.impacto, label: "Impacto" },
  { href: RUTAS.equipo, label: "Nuestro equipo" },
  { href: RUTAS.proyectos, label: "Nuestros proyectos" },
  { href: RUTAS.contacto, label: "Contacto" },
  { href: RUTAS.colaborar, label: "Quiero colaborar" },
];

// Formulario "¿Tenés +90 años?" (Google Form actual; se puede reemplazar por uno propio).
export const FORM_MAS_90_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfrMnRNrFJBKVg9cnLYbtDziYW4ZXTgWcIkk0eianxva4vXow/viewform";

export const FOOTER_COMUNIDAD = [
  { href: FORM_MAS_90_URL, label: "¿Tenés +90 años?", externo: true },
  { href: "http://eepurl.com/jpJ08s", label: "Las cartas de Tita - Newsletter", externo: true },
  { href: WHATSAPP_URL, label: "Comunidad WhatsApp", externo: true },
];

export const FOOTER_REDES = [
  { href: "https://www.instagram.com/noventaycontando/", label: "Instagram", externo: true },
  { href: "https://www.tiktok.com/@noventaycontando", label: "Tiktok", externo: true },
  { href: "https://www.facebook.com/profile.php?id=61574728446390", label: "Facebook", externo: true },
  { href: LINKEDIN_URL, label: "LinkedIn", externo: true },
  { href: "https://www.youtube.com/@Noventaycontando", label: "Youtube", externo: true },
  { href: "https://open.spotify.com/show/4BFwLxfkOEAKFFiv4q54Kd", label: "Spotify", externo: true },
];

export const FOOTER_DESCRIPCION =
  "Asociación civil que promueve la inclusión y el reconocimiento de las personas mayores.";
export const FOOTER_COPY =
  "© 2026 Seguimos Contando Asociación Civil · @soysuarez.dsg";

// Carpeta institucional (PDF). Cuando esté lista, copiarla en public/docs/ con este nombre.
export const CARPETA_INSTITUCIONAL_URL = "/docs/carpeta-institucional.pdf";

// Nuestros proyectos
export const NEWSLETTER_URL = "http://eepurl.com/jpJ08s";
export const LEGISLATURA_URL = "https://www.youtube.com/live/dIuiti-v4o4";
export const FORM_HISTORIA_URL = "https://forms.gle/mX2jxWtfDy69KWYe8";
