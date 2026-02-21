import { providers } from "~/types/Provider";
import { services } from "~/types/Service";
import { serviceStatuses } from "~/types/ServiceStatus";
import { FormSection } from "./FormSection";
import { clients } from "~/types/Client";
import { useState } from "react";
import { Form, Link } from "react-router";
import { appRoutes } from "~/routes";
import type { Order } from "~/types/Order";


interface RsaFormProps {
  orderData?: Order;
}

export function RsaForm({ orderData }: RsaFormProps) {
  
  let order: Order = orderData ?? {} as Order;
  
  if (!orderData) {
    order = {
      client: "Unidas Fleet",
      plate: "",
      provider: "Amparo",
      service: "Guincho",
      status: "Acionado",
      ticket: "",
      agentName: "",
      eta: 60,
      notes: [],
      hasChecklist: false
    }
  }
  
  const [notes, setNotes] = useState<string[]>([]);

  function handleAddNote() {
    const note = (document.getElementById("notes") as HTMLTextAreaElement)
      ?.value;

    if (note) {
      setNotes((prev) => [...prev, note]);
    }
  }


  return (
    <Form
      method="post"
      className="flex justify-between gap-4"
    >
      <section className="w-[75%] bg-white border p-4 flex flex-col gap-5">
        <FormSection>
          {/* PLATE */}
          <div className="">
            <label>Placa:*</label>
            <input
              className="input"
              name={"plate"}
              defaultValue={order.plate}
            />
          </div>

          {/* MSP TICKET */}
          <div className="w-full">
            <label>Ticket:*</label>
            <input
              className="input"
              name={"ticket"}
              defaultValue={order.ticket}
            />
          </div>

          {/* CLIENT */}
          <div className="w-full">
            <label>Cliente:*</label>
            <select
              className="input"
              name={"client"}
              defaultValue={order.client}
            >
              {clients.map((client) => (
                <option key={client} value={client}>
                  {client}
                </option>
              ))}
            </select>
          </div>
        </FormSection>

        <FormSection>
          {/* SERVICE TYPE */}
          <div className="w-full">
            <label>Serviço:*</label>
            <select
              className="input"
              name={"service"}
              defaultValue={order.service}
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* SERVICE STATUS */}
          <div className="w-full">
            <label>Status:*</label>
            <select
              className="input"
              name={"statuses"}
              defaultValue={order.status}
            >
              {serviceStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* PROVIDER */}
          <div className="w-full">
            <label>Fornecedor:*</label>
            <select
              className="input"
              name={"provider"}
              defaultValue={order.provider}
            >
              {providers.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </FormSection>

        {/* AGENT NAME */}
        <div className="w-1/2">
          <label>Acionado por:</label>
          <input
            className="input"
            name={"agentName"}
            defaultValue={order.agentName}
          />
        </div>

        <section>
          {/* ETA */}
          <label className="block text-nowrap">Prévia Estimada:*</label>
          <div className="flex gap-2 items-center">
            <input
              className="input w-[100px]"
              name={"eta"}
              defaultValue={order.eta}
            />
            <span>minutos.</span>
          </div>
        </section>

        <section className="items-center flex gap-2">
          {/* HAS CHECKLIST */}
          <input
            type="checkbox"
            name={"hasChecklist"}
            defaultChecked={order.hasChecklist}
          />
          <label>Possui checklist?</label>
        </section>

        <FormSection>
          <button>Salvar</button>
          <Link to={appRoutes.home}>
            <button className="flat">Cancelar</button>
          </Link>
        </FormSection>
      </section>

      {/* NOTES */}
      <section className="bg-white border p-4 w-[25%]">
        <label>Observações:</label>

        <ul className="overflow-y-auto flex flex-col justify-start text-slate-700 h-[200px] ">
          {notes.map((item) => (
            <li key={item} className="text-xs border-y p-2">
              {item}
            </li>
          ))}
        </ul>

        <input name="notes" className="hidden" aria-hidden value={JSON.stringify(notes)}/>
        <textarea
          id="notes"
          className="resize-none input text-sm h-[100px] mt-4"
        />

        <button
          type="button"
          className="mt-4 bg-slate-800"
          onClick={() => handleAddNote()}
        >
          Adicionar
        </button>
      </section>
    </Form>
  );
}