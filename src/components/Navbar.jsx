import { Link } from "react-router-dom";

const routes = [
  {
    path: "/", icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
  </svg>
  },
  { path: "/skills", label: "Skills" },
  { path: "/work", label: "Work" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  return (
    <nav className="w-full h-16 sticky top-0 border-b border-white bg-[#1B2CC1] text-[#ABD2FA]">
      <ul className="flex justify-evenly items-center h-full">
        {routes.map(({ path, label,icon}, index) => (
          <li key={index}>
            <Link to={path} className="hover:text-white hover:underline">
              {label}
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
