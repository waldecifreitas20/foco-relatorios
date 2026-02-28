import { type RouteConfig, index, route } from "@react-router/dev/routes";


export const appRoutes = {
  home: "/",
  newOrder: "/rsa/new",
  search: "/search/new",
  orderView: (ticket: string) => `/rsa/${ticket}`,
};


export default [
  index("routes/home.tsx"),
  route("/rsa/new","routes/order.tsx"),
  route("/rsa/:ticket", "routes/order-view.tsx"),
  route("/search","routes/search-result.tsx"),
  route("/*","routes/not-found.tsx"),
] satisfies RouteConfig;


