import { RsaViewer } from "~/components/RsaViewer";
import type { Route } from "./+types/order-view";
import { PageTitle } from "~/components/PageTitle";
import type { Order } from "~/types/Order";
import { Link, redirect } from "react-router";
import { appRoutes } from "~/routes";
import { useState } from "react";
import { RsaForm } from "~/components/RsaForm";
import { orderService } from "~/services/order.server";

export function loader({ params }: Route.LoaderArgs) {
  const { plate, ticket } = params;

  return {
    agentName: "Laura",
    service: "Guincho",
    plate: plate,
    client: "Unidas Fleet",
    provider: "Amparo",
    ticket: ticket,
    createdAt: "2026-02-12T08:15:00Z",
    updatedAt: "2026-02-12T08:30:00Z",
    notes: ["Chegada estimada 20 minutos"],
    status: "Acionado",
    eta: "20",
    hasChecklist: false,
  };
}

export default function OrderView({ loaderData }: Route.ComponentProps) {
  const order = loaderData as any as Order;
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <main className="mx-auto w-[80%] block p-4">
      <section className="flex justify-between">
        <PageTitle>Roadside Assistance</PageTitle>
        {!enableEdit && (
          <button className="ml-auto" onClick={() => setEnableEdit(true)}>
            Editar <i className="fa-regular fa-pen-to-square"></i>
          </button>
        )}
      </section>
      {enableEdit ? <RsaForm orderData={order} /> : <RsaViewer order={order} />}
    </main>
  );
}

export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();
  const notes = (data.getAll("notes") ?? []).toString();

  const order = {
    client: data.get("client"),
    plate: data.get("plate"),
    provider: data.get("provider"),
    service: data.get("service"),
    status: data.get("status"),
    ticket: data.get("ticket"),
    agentName: data.get("agentName"),
    eta: Number(data.get("eta") ?? 60),
    hasChecklist: data.get("hasChecklist") === "on",
    notes: JSON.parse(notes),
  } as Partial<Order>;

  console.log(order);

  const response = await orderService.update(order);
  
  console.log(response.status);
  

  return null;
}