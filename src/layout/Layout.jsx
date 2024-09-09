import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="bg-[#091540] antialiased w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
}
