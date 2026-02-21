import AsideBar from "~/components/AsideBar";
import type { Route } from "./+types/home";
import mock from "../assets/server.json";
import type { Order } from "~/types/Order";
import { serviceStatuses, type ServiceStatus } from "~/types/ServiceStatus";
import { StatusCard } from "~/components/Card";
import { Accordeon } from "~/components/Accordeon";
import { Badge } from "~/components/Bagde";
import { UpdateDataButton } from "~/components/UpdateDataButton";
import { storageService } from "~/services/StorageService";
import { useEffect } from "react";
import { Link } from "react-router";
import { PageTitle } from "~/components/PageTitle";
import { OrderTitle } from "~/components/OrderTitle";
import { appRoutes } from "~/routes";
import { orderService } from "~/services/OrderService";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  let { orders, page } = await orderService.getAll();


  /* const filters = {
    statuses: url.searchParams.get("statuses")?.split(";"),
    services: url.searchParams.get("services")?.split(";"),
    client: url.searchParams.get("client") || undefined,
    createdAt: url.searchParams.get("createdAt") ? new Date(url.searchParams.get("createdAt") as string) : undefined,
    updatedAt: url.searchParams.get("updatedAt") ? new Date(url.searchParams.get("updatedAt") as string) : undefined,
  };


  if (filters.client) {
    orders = orders.filter(o => {
      return o.client
        .toLowerCase()
        .includes(filters.client!.toLowerCase())
    });
  } */

  return { orders, page };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { orders } = loaderData;
  const statusList: ServiceStatus[] = ["Acionado", "Agendado", "Em Base", "Concluído", "Cancelado"];


  useEffect(() => {
    storageService.save("orders", orders);
  }, []);


  return (
    <div className="flex p-4">
      <AsideBar />

      <main className="w-full block px-4 ">

        <section className="flex items-start justify-between h-fit">
          <span className="flex items-start border">
            <PageTitle>Painel de Monitoramento</PageTitle>
            <Link to={appRoutes.newOrder} className="inline-block ml-4">
              <button className="mx-auto rounded-full">Nova Solicitação +</button>
            </Link>
          </span>

          <UpdateDataButton />
        </section>


        <section className="w-full overflow-hidden">
          <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between gap-4 w-full">
            {statusList.map(status => {
              return (
                <StatusCard
                  status={status}
                  value={orders.filter(o => o.status === status).length}
                />
              );
            })}
          </ul>
        </section>


        <section className="flex flex-col gap-5 my-4">
          {serviceStatuses.map(status => {
            const filteredOrders = orders.filter(o => o.status === status);

            return (
              <Accordeon
                disabled={filteredOrders.length === 0}
                title={
                  <span className="flex gap-6 items-center">
                    {status}
                    <Badge>Quantidade: {filteredOrders.length}</Badge>
                  </span>
                }>

                {filteredOrders.map(o => {

                  const getChecklistIcon = () => o.hasChecklist ?
                    <i className="fa-solid text-green-400 fa-circle-check"></i>
                    : <i className="fa-solid text-red-400 fa-xmark"></i>

                  const getEta = () => (o.eta ? `${o.eta} minutos` : "Sem prévia");

                  return (
                    <OrderTitle
                      linkTo={appRoutes.orderView(o.plate, o.ticket)}
                      key={o.ticket}
                      order={o}
                      trailing={
                        status === "Concluído" ?
                          getChecklistIcon() :
                          (<>{getEta()} <i className="fa-solid fa-hourglass-half"></i></>)
                      } />
                  );
                })}
              </Accordeon>
            );
          })}
        </section>


      </main>
    </div>
  );
}
