import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="bg-[#000000] antialiased min-h-screen flex flex-col">
      {/* Navbar sticky arriba */}
      <div>
        <Navbar />
      </div>

      {/* Contenido que crece */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer pegado abajo */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
