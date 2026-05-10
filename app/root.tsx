<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> c4f0059616c6597dacc788f77c9e307ad1801ad1
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import "./globals.css";

export default function Root() {
<<<<<<< HEAD
    const [subwaySurf, setSubwaySurf] = useState(false);
    const [lineFollow, setLineFollow] = useState(false);
    const [cursorY, setCursorY] = useState(0);

    
        
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setCursorY(e.clientY);
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

=======
    const [menuOpen, setMenuOpen] = useState(false);
>>>>>>> c4f0059616c6597dacc788f77c9e307ad1801ad1

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
            <div className="global-sidebar">
                <img src="/hero-sidebar.png" alt="" className="global-sidebar-bg" aria-hidden="true" />
                <img src="/title-logo.png" alt="Mush Root" className="global-sidebar-logo" />
                <Navbar mushroomIconSrc="/mini-mush-3.png" mushroomCount={0} />
            </div>



        <div className="global-content">
            <Outlet context={{ subwaySurf, setSubwaySurf, lineFollow, setLineFollow }} />
        </div> 

        {subwaySurf && (
            <div className="fixed inset-0 flex items-end justify-end p-5" onClick={() => setSubwaySurf(false)}>
                <video src="/SS.mp4" autoPlay muted loop  className="w-65 rounded-xl" />
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
                </div>
            </div>

            <div className="global-content">
                <Outlet />
            </div>
        )}  


        {lineFollow && (
                <div className="fixed inset-0 pointer-events-none z-50" style={{
                    background: `linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.4) 0%,
                        rgba(0,0,0,0.4) ${cursorY - 130}px,
                        rgba(0,0,0,0) ${cursorY - 100}px,
                        rgba(0,0,0,0) ${cursorY + 100}px,
                        rgba(0,0,0,0.4) ${cursorY + 130}px,
                        rgba(0,0,0,0.4) 100%
                    )`
                }} />
            )}

        <Outlet context={{ subwaySurf, setSubwaySurf, lineFollow, setLineFollow }} />

            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}

