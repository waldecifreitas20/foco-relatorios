import { PageTitle } from "~/components/PageTitle";
import { appRoutes } from "~/routes";
import { redirect } from "react-router";
import type { Route } from "./+types/order-view";
import type { Order } from "~/types/Order";
import {orderService} from "~/services/order.server"
import { RsaForm } from "~/components/RsaForm";
import { useEffect } from "react";


export default function Order({actionData}: Route.ComponentProps) {


  useEffect(() => {    
    if (actionData) {
      const {message} = actionData;
      alert(message)
    }
  }, [actionData]);
  
  return (
    <main className="mx-auto w-[80%] block p-4">
      <PageTitle>Roadside Assistance</PageTitle>
      <RsaForm />
    </main>
  );
}

export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();
  const notes = (data.getAll("notes") ?? []).toString();
  const redirectTo = data.get("redirect_to") ?? appRoutes.home;
  const order = {
    client: data.get("client"),
    plate: data.get("plate"),
    provider: data.get("provider"),
    date: data.get("date"),
    service: data.get("service"),
    status: data.get("status"),
    ticket: data.get("ticket"),
    agentName: data.get("agentName"),
    eta: Number(data.get("eta") ?? 60),
    hasChecklist: data.get("hasChecklist") === "on",
    notes: JSON.parse(notes),
  } as Order;


  try {
    await orderService.create(order);
  } catch (error) {    
    return {
      message: "Ticket já castrado. Por favor informe outro valor",
    };
  }

  return redirect(`${redirectTo}`);
}

