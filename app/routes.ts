import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/upload/uploadpage.tsx"),
    route("upload", "routes/upload/uploadpage.tsx"),
    route("dashboard", "routes/merge/merge.tsx"),
] satisfies RouteConfig;
