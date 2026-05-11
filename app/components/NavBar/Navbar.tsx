import { NavLink } from "react-router";
import "./navbar.css";

interface NavbarProps {
  mushroomIconSrc?: string;
  mushroomCount?: number;
  enableGame?: boolean;
}

const NAV_ITEMS = [
  { id: "hero-route", label: "Home", to: "/hero" },
  { id: "archive-route", label: "Archives", to: "/archive" },
  { id: "upload-route", label: "Upload", to: "/upload" },
  { id: "timer-route", label: "Lock In", to: "/timer" },
  { id: "accesibility-route", label: "Settings", to: "/accesibility" },
  { id: "merge-route", label: "merge", to: "/merge" },
];

export default function Navbar({
  mushroomIconSrc = "/mini-mush-3.png",
  mushroomCount = 0,
  enableGame = true,
}: NavbarProps) {
  return (
    <nav className="mushroom-nav">
      {NAV_ITEMS.map((item) => {
        if (item.to === "/merge" && !enableGame) {
          return (
            <div key={item.label} className="nav-pill opacity-50 cursor-not-allowed">
              {item.label}
            </div>
          );
        }
        return (
          <NavLink key={item.label} to={item.to} className="nav-pill">
            {item.label}
          </NavLink>
        );
      })}

      <div className="nav-pill mushroom-pill">
        <img src={mushroomIconSrc} alt="mushroom" className="mush-icon" />
        <span>{String(mushroomCount).padStart(2, "0")}</span>
      </div>
    </nav>
  );
}