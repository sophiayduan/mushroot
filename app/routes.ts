import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/ac/accesibility.tsx"),
    route("dashboard", "routes/merge/merge.tsx"),

] satisfies RouteConfig;
