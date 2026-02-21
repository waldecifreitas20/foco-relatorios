import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/rsa/new","routes/order.tsx"),
  { path: "/rsa/:plate/:ticket", file: "routes/order-view.tsx" }
] satisfies RouteConfig;


export const appRoutes = {
  home: "/",
  newOrder: "/rsa/new",
  orderView: (plate: string, ticket: string) => `/rsa/${plate}/${ticket}`
};