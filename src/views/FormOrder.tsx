import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Select } from "../components/Select";
import type { Service } from "../types/Service";
import type { ServiceStatus } from "../types/ServiceStatus";
import { Link, useParams } from "react-router";
import type { Order } from "../types/Order";
import { appRoutes } from "../shared/routes";
import type { Client } from "../types/Client";

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

const clients: Client[] = [
  "Unidas Fleet",
  "Unidas Livre",
  "Unidas Seminovos",
  "Unidas Pesados",
  "Foco",
  "ITA",
  "Energisa",
  "Dahruj",
  "Motory",
  "NETA Auto",
  "Localiza",
  "GAC",
  "GWM",
];



export function FormOrder() {
  const { createOrder, getOrder, updateOrder } = useContext(OrderContext);
  const { protocol } = useParams();
  const [order, setOrder] = useState<Order>();
  const [serviceStatus, setServiceStatus] = useState<ServiceStatus>();
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
        className="flex flex-col gap-4 max-w-[800px]"
      >
        <Input
          readOnly={editMode}
          blocked={editMode}
          value={order?.protocol}
          name="protocol"
          label="Ticket"
          placeholder="3300-33000-a0b1-c2d3-e4f5-g6h7-8"
          required
        />

        <div className="flex gap-4">
          <Input 
            value={order?.plate} 
            name="plate" 
            label="Placa" 
            required />
          <Select
            required
            value={order?.partner}
            name="partner"
            label="Fornecedor"
            options={["Amparo", "Socorreae", "Cadê Guincho"]}
          />
        </div>

        <div className="flex gap-4">
          <Select
            value={order?.service}
            name="client"
            label="Cliente Contratante"
            options={clients}
            required
          />
          <Select
            value={order?.service}
            name="service"
            label="Serviço"
            options={services}
            required
          />
        </div>

        <div className="flex gap-4">
          <Input required value={order?.date} name="date" type="date" label="Data" />
          <Input  value={order?.hour} name="hour" type="time" label="Hora" />
        </div>

        <Select
          value={order?.status}
          name="status"
          label="Status"
          options={status}
          required
          onSelect={(option) => setServiceStatus(option as ServiceStatus)}
        />

        {serviceStatus === "Aguardando aprovação de orçamento" && (
          <Input
            readOnly={editMode}
            blocked={editMode}
            type="number"
            value={order?.specialBudget?.cost}
            name="cost"
            label="Valor do orçamento"
            placeholder="R$ 1.000,00"
            required
          />
        )}

        <div className="flex w-125 gap-4 flex-nowrap mt-10">
          <Link
            to={appRoutes.dashboard}
            className="
            bg-transparent 
            border-[var(--primary)] 
            text-[var(--primary)] 
            hover:text-white
            block text-center
            cursor-pointer
            hover:bg-[var(--primary-hover)]
            w-full py-3 px-10 rounded-lg shadow-lg border
            "
          >
            Cancelar
          </Link>

          <Button>{editMode ? "Salvar" : "Registrar"}</Button>
        </div>
      </form>
    </ViewContainer>
  );
}
