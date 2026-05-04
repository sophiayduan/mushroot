import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/hero/hero.tsx"),
    route("dashboard", "routes/dashboard/dashboard.tsx"),
] satisfies RouteConfig;
