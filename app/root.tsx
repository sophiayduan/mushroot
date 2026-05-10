import { useState, useEffect } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import "./globals.css";

export default function Root() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDark(true);
        }
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Mush Root</title>
            <Meta />
            <Links />
        </head>
        <body>
            <button
                className={`hamburger-btn${menuOpen ? " is-open" : ""}`}
                onClick={() => setMenuOpen(o => !o)}
                aria-label="Toggle menu"
            >
                <span />
                <span />
                <span />
            </button>

            {menuOpen && (
                <div className="sidebar-overlay" onClick={() => setMenuOpen(false)} />
            )}

            <div className={`global-sidebar${menuOpen ? " is-open" : ""}`}>
                <img
                    src="/hero-sidebar.png"
                    alt=""
                    className="global-sidebar-bg"
                    aria-hidden="true"
                />
                <div className="sidebar-scroll">
                    <Navbar mushroomIconSrc="/mini-mush-3.png" mushroomCount={0} />
                    <img
                        src="/title-logo.png"
                        alt="Mush Root"
                        className="global-sidebar-logo"
                    />
                    <button onClick={() => setDark(d => !d)} className="theme-toggle">
                        {dark ? "Light" : "Dark"}
                    </button>
                </div>
            </div>

            <div className="global-content">
                <Outlet />
            </div>

            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}