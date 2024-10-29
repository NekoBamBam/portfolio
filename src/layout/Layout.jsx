import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="bg-[#fffefe] antialiased  h-screen flex flex-col">
      <div className="lg:sticky top-0 z-50">
      <Navbar />
        
      </div>
      <div className="w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
}
