import { Link } from "react-router-dom";

const routes = [
  { path: "/", label: "Home" },
  { path: "/skills", label: "Skills" },
  { path: "/work", label: "Work" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="w-full h-16 sticky top-0 border-b border-white bg-[#1B2CC1] text-[#ABD2FA]">
      <ul className="flex justify-evenly items-center h-full">
        {routes.map(({ path, label }, index) => (
          <li key={index}>
            <Link to={path} className="hover:text-white hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
