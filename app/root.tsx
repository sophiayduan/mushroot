import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

export default function Root() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Mush Root</title>
            {/*<link rel="icon" type="image/svg+xml" href="/favicon.svg" />*/}
            <Meta />
            <Links />
        </head>

        <body>

        <div className="App">
            <Outlet />
        </div>

        <ScrollRestoration />
        <Scripts />
        </body>

        </html>
    );
}