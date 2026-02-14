import AsideBar from "~/components/AsideBar";
import type { Route } from "./+types/home";
import mock from "../assets/server.json";
import type { Order } from "~/types/Order";
import { serviceStatuses, type ServiceStatus } from "~/types/ServiceStatus";
import { Card } from "~/components/Card";
import { Divider } from "~/components/Divider";
import { Accordeon } from "~/components/Accordeon";


export async function loader({ params }: Route.LoaderArgs) {
  return mock;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const orders = [...loaderData] as any as Order[];
  const tileStyle = "grid grid-cols-6 block w-full text-center ";

  return (
    <div className="flex p-4">
      <AsideBar />
      <main className="w-full block px-4">
        <h1 className="text-3xl font-semibold text-neutral-800 mb-8">Painel de Monitoramento</h1>

        <section className="w-full overflow-hidden">

          <ul className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-between gap-4 block w-full">
            {(["Acionado", "Agendado", "Em Base", "Concluído", "Cancelado"] as ServiceStatus[]).map(status => {
              return (
                <Card>
                  <p className="font-semibold text-sm text-neutral-500 uppercase">{status}</p>
                  <p className="text-6xl font-semibold text-neutral-800 my-6">{orders.filter(o => o.status === status).length}</p>
                </Card>
              );
            })}
          </ul>
        </section>

        <section className="flex flex-col gap-5 my-4">
          {(["Acionado", "Em Deslocamento", "Agendado", "Em Base", "Concluído", "Cancelado"] as ServiceStatus[]).map(status => {
            const filteredOrders = orders.filter(o => o.status === status);

            return (
              <Accordeon title={`${status} (${filteredOrders.length})`}>
                {filteredOrders.map(o => {
                  return (
                    <ul key={o.ticket} className="grid grid-cols-7 text-sm text-center items-center hover:bg-blue-100 text-slate-800">
                      <li>{o.plate}</li>
                      <li>{o.service}</li>
                      <li>{o.client}</li>
                      <li>{o.provider}</li>
                      <li>{o.ticket.substring(o.ticket.length - 7)}</li>
                      <li>{`${new Date(o.createdAt).toLocaleString("pt-BR", {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}`}</li>
                      <li>{
                        status === "Concluído" ? <input type="checkbox" checked={o.hasChecklist} /> :
                          o.eta ? `${o.eta} minutos` : "Sem prévia"
                      }</li>
                    </ul>
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
