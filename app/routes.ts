import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/hero/hero.tsx"),
    route("accesibility", "routes/ac/accesibility.tsx", { id: "accesibility-route" }),
    route("archive", "routes/archive/archive.tsx", { id: "archive-route" }),
    route("hero", "routes/hero/hero.tsx", { id: "hero-route" }),
    route("merge", "routes/merge/merge.tsx", { id: "merge-route" }),
    route("upload", "routes/upload/UploadPage.tsx", { id: "upload-route" }),
] satisfies RouteConfig;