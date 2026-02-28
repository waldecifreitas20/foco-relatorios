import { orderService } from "~/services/order.server";
import type { Route } from "./+types/search-result";
import { PageTitle } from "~/components/PageTitle";
import { useLoaderData } from "react-router";
import type { Order } from "~/types/Order";
import { OrderTile } from "~/components/OrderTile";
import { appRoutes } from "~/routes";
import { URL } from "url";

export async function loader({ request }: Route.LoaderArgs) {
  const req = new URL(request.url);
  const { orders } = await orderService.getAll();

  const match = req.searchParams.get("match");

  return { orders, match };
}

export default function SearchResult() {
  const { orders, match } = useLoaderData<{ orders: Order[]; match: string }>();

  return (
    <main className="mx-auto px-10 max-w-[1200px]">
      <section className="py-5">
        <PageTitle>Resultados da Pesquisa</PageTitle>
        <p>
          Mostrando {orders.length} resultados para "{match}"
        </p>
      </section>

      <ul className="flex flex-col gap-1">
        {orders.map((o) => {
          return <OrderTile order={o} linkTo={appRoutes.orderView(o.ticket)} />;
        })}
      </ul>
    </main>
  );
}