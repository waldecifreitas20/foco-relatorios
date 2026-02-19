import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "/rsa/new", file: "routes/order.tsx" },
  { path: "/rsa/:plate/:ticket", file: "routes/order-view.tsx" }
] satisfies RouteConfig;


export const appRoutes = {
  home: "/",
  newOrder: "/rsa/new",
  orderView: (plate: string, ticket: string) => `/rsa/${plate}/${ticket}`
};