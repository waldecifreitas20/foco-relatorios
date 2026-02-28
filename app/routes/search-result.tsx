import { orderService } from "~/services/order.server";
import type { Route } from "./+types/search-result";

export async function loader({}: Route.LoaderArgs ) {
  const response = await orderService.getAll();
}


export default function SearchResult() {
  return (
    <h1>This is the result pages of search</h1>
  );
}