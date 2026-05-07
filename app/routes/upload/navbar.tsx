import { NavLink } from "react-router";
import "./Navbar.css";



interface NavbarProps {
  mushroomIconSrc?: string;
  mushroomCount?: number;
}

const NAV_ITEMS = [
  { label: "Home",     to: "/" },
  { label: "Archives", to: "/archives" },
  { label: "Upload",   to: "/upload" },
  { label: "Lock In",  to: "/lockin" },
  { label: "Profile",  to: "/profile" },
];

export default function Navbar({
  mushroomIconSrc = "/public/mini-mush-3.png",
  mushroomCount = 0,
}: NavbarProps) {
  return (
    <nav className="mushroom-nav">
      {NAV_ITEMS.map(({ label, to }) => (
        <NavLink
          key={label}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            `nav-pill ${isActive ? "nav-pill--active" : ""}`
          }
        >
          {label}
        </NavLink>
      ))}

      {/* Mushroom counter — not a route, just a display button */}
      <div className="nav-pill nav-pill--mushroom">
        <img
          src={mushroomIconSrc}
          alt="mushroom"
          className="mushroom-icon"
        />
        <span>{String(mushroomCount).padStart(2, "0")}</span>
      </div>
    </nav>
  );
}