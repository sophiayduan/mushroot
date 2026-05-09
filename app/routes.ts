import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [

    index("routes/upload/uploadpage.tsx"),

    route("upload", "routes/upload/uploadpage.tsx", { id: "upload-route" }),

    route("dashboard", "routes/merge/merge.tsx", { id: "dashboard-route" }),

] satisfies RouteConfig;