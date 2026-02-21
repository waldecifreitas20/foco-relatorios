import { PageTitle } from "~/components/PageTitle";
import { lazy, Suspense } from "react";
import { appRoutes } from "~/routes";
import { redirect } from "react-router";
import type { Route } from "./+types/order-view";
import type { Order } from "~/types/Order";
import { orderService } from "~/services/OrderService";

// Load the form only when needed
const RsaForm = lazy(() =>
  import("~/components/RsaForm").then((m) => ({ default: m.RsaForm }))
);

export default function Order() {
  return (
    <main className="mx-auto w-[80%] block p-4">
      <PageTitle>Roadside Assistance</PageTitle>
      <Suspense fallback={<div>Loading Form...</div>}>
        <RsaForm />
      </Suspense>
    </main>
  );
}

export async function action({ request }: Route.ActionArgs) {
  const data = await request.formData();
  const notes = (data.getAll("notes") ?? []).toString();

  const order= {
    client: data.get("client"),
    plate: data.get("plate"),
    provider: data.get("provider"),
    service: data.get("service"),
    status: data.get("status"),
    ticket: data.get("status"),
    agentName: data.get("agentName"),
    eta: Number(data.get("eta") ?? 60),
    hasChecklist: data.get("hasChecklist") === "on",
    notes: JSON.parse(notes),
  } as Order;


  return null;
}