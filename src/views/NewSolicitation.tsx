import { useContext } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Select } from "../components/Select";
import type { Service } from "../types/Service";
import type { ServiceStatus } from "../types/ServiceStatus";

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

export function NewSolicitation() {
  const { createOrder } = useContext(OrderContext);

  function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData.entries()) as any;

    createOrder(data);
  }

  return (
    <ViewContainer title="Registrar Nova Solicitação">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[1000px]"
      >
        <div className="flex gap-4">
          <Input name="plate" label="Placa" />
          <Input name="protocol" label="Protocolo" />
        </div>

        <div className="flex gap-4">
          <Select name="service" label="Serviço" options={services} />
          <Select name="status" label="Status" options={status} />
          <Input name="date" type="date" label="Data" />
          <Input name="hour" type="time" label="Hora" />
        </div>

        <div className="flex w-125 gap-4 flex-nowrap mt-10">
          <Button value="Cancelar" outlined />
          <Button value="Registrar" />
        </div>
      </form>
    </ViewContainer>
  );
}