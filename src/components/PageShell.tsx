import Nav from "./Nav";
import Footer from "./Footer";

// Marco común de las páginas interiores: fondo de papel azul + nav + footer.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-azul-footer bg-[url('/img/contacto-fondo.webp')] bg-cover bg-top">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
