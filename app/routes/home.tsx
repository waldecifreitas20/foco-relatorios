import AsideBar from "~/components/AsideBar";
import type { Route } from "./+types/home";
import { serviceStatuses, type ServiceStatus } from "~/types/ServiceStatus";
import { StatusCard } from "~/components/Card";
import { Accordeon } from "~/components/Accordeon";
import { Badge } from "~/components/Bagde";
import { UpdateDataButton } from "~/components/UpdateDataButton";
import { useContext, useEffect, useState } from "react";
import { Link, useActionData, useLoaderData } from "react-router";
import { PageTitle } from "~/components/PageTitle";
import { OrderTile} from "~/components/OrderTile";
import { appRoutes } from "~/routes";
import { orderService } from "~/services/order.server";
import { OrderContext } from "~/provider/OrderProvider";
import DateUpdater from "~/components/DateUpdater";
import { storageService } from "~/services/StorageService";
import type { Order } from "~/types/Order";


interface DataResponse {
  orders: Order[], 
  page: number, 
  searchDate: string
}


export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const searchDate = url.searchParams.get("createdAt");
  let { orders, page } = await orderService.getAll(searchDate ?? undefined);

  
  return { orders, page, searchDate };
}

export async function clientAction({request}: Route.ClientActionArgs) {
  const data = await request.formData();
  let orders = (storageService.load("orders") ?? []) as Order[];
  const searchDate = storageService.load("searchDate");


  const client = data.get("client");
  const statuses = data.getAll("statuses");
  const services = data.getAll("services");
  
  
  if (client !== "all") {
    orders = orders.filter(o=> o.client === client);
  }
  
  if (statuses.length > 0) {
    orders = orders.filter(o=> statuses.includes(o.status));
  }
  
  if (services.length > 0) {
    orders = orders.filter(o=> services.includes(o.service));
  }
  

  return {orders, page: 0, searchDate};
}



export default function Home() {
  const serverData = useLoaderData<DataResponse>();
  const cachedData = useActionData<DataResponse>();
  const { setCache } = useContext(OrderContext);
  const { orders, searchDate } = (cachedData) ? cachedData : serverData;

  const statusList: ServiceStatus[] = [
    "Acionado",
    "Agendado",
    "Em Base",
    "Concluído",
    "Cancelado",
  ];

  useEffect(() => {
    setCache(serverData.orders);
    storageService.save("searchDate", searchDate);
  }, []);

  function getDate() {
    if (searchDate) {
      return `do dia ${searchDate.split("-").reverse().join("/")}`;
    }

    return "de hoje";
  }

  return (
    <div className="flex p-4">
      <AsideBar />

      <main className="w-full block px-4 ">
        <section className="flex items-start justify-between h-fit">
          <span className="flex items-start">
            <PageTitle>Painel de Monitoramento</PageTitle>
            <Link to={appRoutes.newOrder} className="inline-block ml-4">
              <button
                onClick={(evt) => evt.stopPropagation()}
                className="mx-auto rounded-full"
              >
                Nova Solicitação +
              </button>
            </Link>
          </span>

          <UpdateDataButton />
        </section>

        {/* TODAY'S STATS */}
        <section className="w-full overflow-hidden">
          <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between gap-4 w-full">
            {statusList.map((status) => {
              return (
                <StatusCard
                  key={status}
                  status={status}
                  value={orders.filter((o) => o.status === status).length}
                />
              );
            })}
          </ul>
        </section>

        <section className="flex w-full justify-between items-center my-4">
          <DateUpdater />

          <p className="text-slate-800 text-sm my-4 text-blue-500 flex gap-2 items-center">
            <span
              className="
            bg-blue-500 text-white
            flex items-center justify-center 
            size-5 rounded-full"
            >
              !
            </span>
            Mostrando acionamentos {getDate()}
          </p>
        </section>

        <section className="flex flex-col gap-5 my-4">
          {serviceStatuses.map((status) => {
            const filteredOrders = orders.filter((o) => o.status === status);

            return (
              <Accordeon
                key={`Accordeon-${status}`}
                disabled={filteredOrders.length === 0}
                title={
                  <span className="flex gap-6 items-center">
                    {status}
                    <Badge>Quantidade: {filteredOrders.length}</Badge>
                  </span>
                }
              >
                {filteredOrders.map((o) => {
                  const getChecklistIcon = () =>
                    o.hasChecklist ? (
                      <i className="fa-solid text-green-400 fa-circle-check"></i>
                    ) : (
                      <i className="fa-solid text-red-400 fa-xmark"></i>
                    );

                  const getEta = () =>
                    o.eta ? `${o.eta} minutos` : "Sem prévia";

                  return (
                    <OrderTile
                      linkTo={appRoutes.orderView(o.ticket)}
                      key={o.ticket}
                      order={o}
                      trailing={
                        status === "Concluído" ? (
                          getChecklistIcon()
                        ) : (
                          <>
                            {getEta()}{" "}
                            <i className="fa-solid fa-hourglass-half"></i>
                          </>
                        )
                      }
                    />
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
