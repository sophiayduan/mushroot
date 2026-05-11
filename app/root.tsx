import { useState, useEffect } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import "./globals.css";

export default function Root() {
    const [subwaySurf, setSubwaySurf] = useState(false);
    const [lineFollow, setLineFollow] = useState(false);
    const [cursorY, setCursorY] = useState(0);
    const [bw, setBlackWhite] = useState(false);
    const [animations, setAnimations] = useState(true);
    const [enableGame, setGame] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => setCursorY(e.clientY);
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

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
            <div style={{ filter: bw ? "grayscale(100%)" : "none" }}>
            <div className="global-sidebar">
                <img src="/hero-sidebar.png" alt="" className="global-sidebar-bg" aria-hidden="true" />
                <img src="/title-logo.png" alt="Mush Root" className="global-sidebar-logo" />
                <Navbar mushroomIconSrc="/mini-mush-3.png" mushroomCount={0} enableGame={enableGame} />
            </div>

            <div className="global-content">
               <Outlet context={{ subwaySurf, setSubwaySurf, lineFollow, setLineFollow, bw, setBlackWhite, animations, setAnimations, enableGame, setGame }} />
            </div>

            {subwaySurf && (
                <div className="fixed inset-0 flex items-end justify-end p-5" onClick={() => setSubwaySurf(false)}>
                    <video src="/SSS.mp4" autoPlay muted loop className="w-65 rounded-xl" />
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



        </div>

            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}
