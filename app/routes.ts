import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/hero/hero.tsx"),
    route("timer", "routes/timer/timer.tsx")

] satisfies RouteConfig;
