import { RsaViewer } from "~/components/RsaViewer";
import type { Route } from "./+types/order-view";
import { PageTitle } from "~/components/PageTitle";
import type { Order } from "~/types/Order";
import { Link, redirect } from "react-router";
import { useContext, useEffect, useState } from "react";
import { RsaForm } from "~/components/RsaForm";
import { orderService } from "~/services/order.server";
import { OrderContext } from "~/provider/OrderProvider";
import { appRoutes } from "~/routes";

export function loader({ params }: Route.LoaderArgs) {
  const { ticket, plate } = params;

  return {
    ticket,
    plate,
  };
}

export default function OrderView({ loaderData }: Route.ComponentProps) {
  const { ticket, plate } = loaderData;
  const { getOrderByTicket } = useContext(OrderContext);
  const [order, setOrder] = useState<Order>({} as Order);

  const [enableEdit, setEnableEdit] = useState(false);

  useEffect(() => {
    let cached = getOrderByTicket(ticket);
    console.log(cached);
    
    if (!cached) {
     alert("Não foi possível carregar os dados.");
     window.location.pathname = "/";
    } else {
      setOrder(cached);
    }

  }, []);

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


  const response = await orderService.update(order);
  
  console.log(response);
  

  return redirect(appRoutes.home);
}