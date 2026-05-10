import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/NavBar/Navbar";
import "./globals.css";

export default function Root() {
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
            {/* Sidebar sits fixed on top of every page */}
            <div className="global-sidebar">
                <img
                    src="/hero-sidebar.png"
                    alt=""
                    className="global-sidebar-bg"
                    aria-hidden="true"
                />
                <img
                    src="/title-logo.png"
                    alt="Mush Root"
                    className="global-sidebar-logo"
                />
                <Navbar mushroomIconSrc="/mini-mush-3.png" mushroomCount={0} />
            </div>

            {/* Every page renders here, pushed right of the sidebar */}
            <div className="global-content">
                <Outlet />
            </div>

            <ScrollRestoration />
            <Scripts />
        </body>
        </html>
    );
}