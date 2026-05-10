import { useState } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import "./globals.css";

export default function Root() {
    const [subwaySurf, setSubwaySurf] = useState(false);

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
                <Outlet context={{ subwaySurf, setSubwaySurf }} />
            </div>

        {subwaySurf && (
            <div className="fixed inset-0 flex items-end justify-end p-5" onClick={() => setSubwaySurf(false)}>
                <video src="/SS.mp4" autoPlay muted loop  className="w-65 rounded-xl" />
            </div>
        )}  

            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}