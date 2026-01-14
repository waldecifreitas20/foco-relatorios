import { Button } from "./Button";
import { Select } from "./Select";
import type { Service } from "../types/Service";
import { Input } from "./Input";
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

const status:ServiceStatus[] = [
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
export function SearchBar() {
  return (
    <div className="gap-2 mt-4 mb-8 items-end flex w-full justify-between">
      <div className="flex gap-4">
        <Select label="Serviço" options={services} onSelected={() => {}} />
        <Select label="Status" options={status} onSelected={() => {}} />
        
        <div>
          <p>Placa:</p>
          <Input placeholder="Placa"/>
        </div>
      
      </div>

      <div>
        <Button value="Pesquisar" />
      </div>
    </div>
  );
}
