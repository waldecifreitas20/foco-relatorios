import AsideBar from "~/components/AsideBar";
import type { Route } from "./+types/home";
import mock from "../assets/server.json";
import type { Order } from "~/types/Order";
import { serviceStatuses, type ServiceStatus } from "~/types/ServiceStatus";


export async function loader({ params }: Route.LoaderArgs) {
  return mock;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const orders = [...loaderData] as any as Order[];

  return (
    <main className="flex p-4">
      <AsideBar />
      <section className="w-full block px-4">
        <h1 className="text-3xl font-semibold text-neutral-800 mb-8">Painel de Monitoramento</h1>

        <section className="w-[80&] overflow-hidden">

          <ul className="grid grid-cols-5 justify-between gap-4 block w-full">
            {(["Acionado", "Agendado", "Em Base", "Concluído", "Cancelado"] as ServiceStatus[]).map(status => {
              return (
                <li className="bg-white border border-slate-200 rounded-lg p-6 w-full block">
                  <p className="font-semibold text-sm text-neutral-500 uppercase">{status}</p>
                  <p className="text-6xl font-semibold text-neutral-800 my-6">{orders.filter(o => o.status === status).length}</p>
                </li>
              );
            })}
          </ul>

        </section>
      </section>
    </main>
  );
}
