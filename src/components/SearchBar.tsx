import { Button } from "./Button";
import { Select } from "./Select";
import type { Service } from "../types/Service";
import { Input } from "./Input";
import type { ServiceStatus } from "../types/ServiceStatus";
import { useContext } from "react";
import { OrderContext } from "../provider/OrderContext";
import type { Order } from "../types/Order";


export type SearchParams = {
  plate: string;
  service: string;
  status: string;
};


interface SearchBarProps {
  onResult: (result: Order[]) => void;
}




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
  "Serviço frustrado"
];


export function SearchBar(props: SearchBarProps) {
  const { search } = useContext(OrderContext);



  async function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData.entries());
    const result = await search(data as SearchParams);

    props.onResult(result);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="gap-10 mt-4 mb-8 items-end flex w-full justify-between"
    >
      <div className="flex gap-2 w-full">
        <div className="w-1/2 min-w-[100px]">
          <p>Placa:</p>
          <Input name="plate" placeholder="ex:ABC0D12" />
        </div>

        <Select
          name="service"
          label="Serviço"
          options={services.map(s => ({label: s, value: s}))}
        />
        <Select
          name="status"
          label="Status"
          options={status.map(s => ({label: s, value: s}))}
        />
      </div>

      <div>
        <Button><i className="fa-solid fa-magnifying-glass"></i></Button>
      </div>
    </form>
  );
}
