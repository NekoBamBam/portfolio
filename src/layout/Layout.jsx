import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
  <Navbar />
  <main className="flex-grow flex flex-col pb-[88px] md:pb-0">
    <Outlet />
  </main>
  <Footer />
</div>

  );
}
