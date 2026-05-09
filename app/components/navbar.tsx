// Navbar.tsx

import { NavLink } from "react-router";
import "./navbar.css";

interface NavbarProps {
    mushroomIconSrc?: string;
    mushroomCount?: number;
}

const NAV_ITEMS = [
    { label: "Home", to: "/" },
    { label: "Archives", to: "/archives" },
    { label: "Upload", to: "/upload" },
    { label: "Lock In", to: "/lockin" },
    { label: "Profile", to: "/profile" },
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