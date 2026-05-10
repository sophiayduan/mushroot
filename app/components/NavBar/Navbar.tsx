// Navbar.tsx

import { NavLink } from "react-router";
import "./navbar.css";

interface NavbarProps {
  mushroomIconSrc?: string;
  mushroomCount?: number;
}

const NAV_ITEMS = [
  { id: "hero-route", label: "Home", to: "/hero" },
  { id: "archive-route", label: "Archives", to: "/archive" },
  { id: "upload-route", label: "Upload", to: "/upload" },
  { id: "timer-route", label: "Lock In", to: "/timer" },
  { id: "accesibility-route", label: "Settings", to: "/accesibility" },
];

export default function Navbar({
  mushroomIconSrc = "/mini-mush-3.png",
  mushroomCount = 0,
}: NavbarProps) {

  return (

    <nav className="mushroom-nav">

      {NAV_ITEMS.map((item) => (

        <NavLink
          key={item.label}
          to={item.to}
          className="nav-pill"
        >
          {item.label}
        </NavLink>

      ))}

      <div className="nav-pill mushroom-pill">

        <img
          src={mushroomIconSrc}
          alt="mushroom"
          className="mush-icon"
        />

        <span>
          {String(mushroomCount).padStart(2, "0")}
        </span>

      </div>

    </nav>
  );
}