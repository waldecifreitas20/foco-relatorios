import AsideBar from "~/components/AsideBar";
import type { Route } from "./+types/home";
import mock from "../assets/server.json";
import type { Order } from "~/types/Order";
import { type ServiceStatus } from "~/types/ServiceStatus";
import { Card } from "~/components/Card";
import { Accordeon } from "~/components/Accordeon";
import { Badge } from "~/components/Bagde";
import { UpdateDataButton } from "~/components/UpdateDataButton";
import { storageService } from "~/services/StorageService";
import { useEffect } from "react";
import { Link } from "react-router";
import { PageTitle } from "~/components/PageTitle";


export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const filters = {
    statuses: url.searchParams.get("statuses")?.split(";"),
    services: url.searchParams.get("services")?.split(";"),
    client: url.searchParams.get("client") || undefined,
    createdAt: url.searchParams.get("createdAt") ? new Date(url.searchParams.get("createdAt") as string) : undefined,
    updatedAt: url.searchParams.get("updatedAt") ? new Date(url.searchParams.get("updatedAt") as string) : undefined,
  };

  let orders = mock;

  if (filters.client) {
      orders = orders.filter(o => {
        return o.client
        .toLowerCase()
        .includes(filters.client!.toLowerCase())
    });
  }

  return orders;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const orders = (loaderData as any as Order[]);

  useEffect(() => {
    storageService.save("orders", orders);
  }, []);


  return (
    <div className="flex p-4">
      <AsideBar />

      <main className="w-full block px-4 ">

        <section className="flex justify-between h-fit">

          <span className="flex gap-4 justify-start">
            <PageTitle>Painel de Monitoramento</PageTitle>
            <Link to="/rsa/new">
              <button className="mx-auto rounded-full">Nova Solicitação +</button>
            </Link>
          </span>

        <UpdateDataButton />
      </section>


      <section className="w-full overflow-hidden">
        <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between gap-4 block w-full">
          {(["Acionado", "Agendado", "Em Base", "Concluído", "Cancelado"] as ServiceStatus[]).map(status => {
            return (
              <Card>
              <p className="font-semibold text-sm text-slate-500 uppercase">{status}</p>
              <p className="text-6xl font-semibold text-slate-800 my-6">{orders.filter(o => o.status === status).length}</p>
              </Card>
            );
      })}
    </ul>
  </section>


  <section className="flex flex-col gap-5 my-4">
    {(["Acionado", "Em Deslocamento", "Agendado", "Em Base", "Concluído", "Cancelado"] as ServiceStatus[]).map(status => {
      const filteredOrders = orders.filter(o => o.status === status);


      return (
        <Accordeon
        disabled={filteredOrders.length === 0}
        title={
          <span className="flex block gap-6 items-center">
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
            <Link
            to={`/acionamentos/${o.plate}`}
            key={o.ticket}
            className="
            grid grid-cols-7 items-center
            py-4
            text-sm text-center  hover:ml-1
            border-l-4 border-transparent
            bg-white hover:border-red-500 hover:bg-slate-100 text-slate-800
            ">
          <span>{o.plate}</span>
          <span>{o.service}</span>
          <span>{o.client}</span>
          <span>{o.provider}</span>
          <span>{o.ticket.substring(o.ticket.length - 7)}</span>
            <span>{`${new Date(o.createdAt ?? new Date(Date.now()))
            .toLocaleString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
        })}`} <i className="fa-regular fa-calendar"></i>
        </span>
        <span>
          {status === "Concluído" ?
          getChecklistIcon() :
        (<>{getEta()} <i className="fa-solid fa-hourglass-half"></i></>)}
        </span>
      </Link>
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
