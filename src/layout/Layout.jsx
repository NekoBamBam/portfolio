import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="bg-[#000000] antialiased  h-screen flex flex-col">
      <div className="lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="w-full h-screen ">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
