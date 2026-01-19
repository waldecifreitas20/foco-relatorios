import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Select } from "../components/Select";
import type { Service } from "../types/Service";
import type { ServiceStatus } from "../types/ServiceStatus";
import { useParams } from "react-router";
import type { Order } from "../types/Order";

const services: Service[] = [
  "Guincho",
  "Recarga de Bateria",
  "Chaveiro",
  "Desatolamento",
  "Pane Seca",
  "Troca de Bateria",
  "Troca de Pneu",
];

const status: ServiceStatus[] = [
  "Agendado",
  "Aguardando aprovação de orçamento",
  "Aguardando confirmação de Conclusão",
  "Aguardando confirmação de entrega",
  "Aguardando confirmação de remoção",
  "Aguardando direcionamento",
  "Cancelado",
  "Concluído",
  "Em andamento",
  "Em base",
  "Serviço frustrado",
];

export function FormOrder() {
  const { createOrder, getOrder, updateOrder } = useContext(OrderContext);
  const { protocol } = useParams();
  const [order, setOrder] = useState<Order>();
  const editMode = protocol != undefined;

  useEffect(() => {
    if (editMode) {
      setOrder(getOrder(protocol));
    } else {
      setOrder(undefined);
    }
  });

  async function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData.entries()) as any;

    var action = createOrder;

    if (editMode) {
      action = updateOrder;
    }

    try {
      await action(data);
      alert("Atendimento salvo com sucesso!");
      location.pathname = "/";
      
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <ViewContainer title={`${!editMode ? "Criar" : "Alterar"} Solicitação`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[1000px]"
      >
        <div className="flex gap-4">
          <Input value={order?.plate} name="plate" label="Placa" />
          <Input
            readOnly={editMode}
            value={order?.protocol}
            name="protocol"
            label="Protocolo"
          />
        </div>

        <div className="flex gap-4">
          <Select
            value={order?.service}
            name="service"
            label="Serviço"
            options={services}
          />
          <Select
            value={order?.status}
            name="status"
            label="Status"
            options={status}
          />
          <Input value={order?.date} name="date" type="date" label="Data" />
          <Input value={order?.hour} name="hour" type="time" label="Hora" />
        </div>

        <div className="flex w-125 gap-4 flex-nowrap mt-10">
          <Button value="Cancelar" outlined />
          <Button value={editMode ? "Salvar" : "Registrar"} />
        </div>
      </form>
    </ViewContainer>
  );
}
