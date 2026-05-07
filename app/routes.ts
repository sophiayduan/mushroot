import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("./routes/upload/UploadPage.tsx"),
    route("dashboard", "routes/merge/merge.tsx"),

] satisfies RouteConfig;
