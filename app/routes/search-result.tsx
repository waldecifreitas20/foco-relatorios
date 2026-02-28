import { orderService } from "~/services/order.server";
import type { Route } from "./+types/search-result";
import { PageTitle } from "~/components/PageTitle";
import { useLoaderData } from "react-router";
import type { Order } from "~/types/Order";

export async function loader({}: Route.LoaderArgs ) {
  const { orders } = await orderService.getAll();

  return { orders };
}


export default function SearchResult() {
  const {orders} = useLoaderData<{orders: Order[]}>();
  
  return (
    <>
      <PageTitle>Resultados da Pesquisa</PageTitle>
      <ul>
        {orders.map(o => {
          return <li>{o.plate}</li>;
        })}
      </ul>
    </>
  );
}