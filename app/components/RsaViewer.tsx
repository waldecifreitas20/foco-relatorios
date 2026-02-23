import type { Order } from "~/types/Order";

export function RsaViewer({ order }: { order: Order }) {
  const fields = [
    { label: "Placa", value: order.plate },
    { label: "Ticket", value: order.ticket },
    { label: "Cliente", value: order.client },
    { label: "Serviço", value: order.service },
    { label: "Status", value: order.status },
    { label: "Fornecedor", value: order.provider },
    { label: "Acionado por", value: order.agentName },
    { label: "Prévia Estimada", value: order.eta },
  ];
  
  console.log(order.notes);
  

  return (
    <section
      className="flex justify-between gap-4">

      <section className="w-[75%] rounded-lg shadow-lg bg-white border p-4 flex flex-col gap-5">

        <div className="grid grid-cols-2 gap-4">
          {fields.map((field) => (
            <div key={field.label} className="w-full">
              <label>{field.label}:</label>
              <p className="text-slate-700">{field.value}</p>
            </div>
          ))}
        </div>

        <section className="items-center flex gap-2">
          {/* HAS CHECKLIST */}
          <p>Possui checklist?</p>
          <p>{order.hasChecklist ? "Sim" : "Não"}</p>
        </section>

      </section>

      {/* NOTES */}
      <section className="bg-white border p-4 w-[25%] rounded-lg shadow-lg">
        <label>Observações:</label>

        <ul className="overflow-y-auto flex flex-col justify-start text-slate-700 h-[200px] ">
          {(order.notes ?? []).map((item) => (
            <li key={item} className="text-xs border-y p-2">
              {item}
            </li>
          ))}
        </ul>
      </section>

    </section>
  );
}