import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Select } from "../components/Select";
import { Link, useNavigate, useParams } from "react-router";
import { appRoutes } from "../shared/routes";
import type { SpecialBudgetReason, SpecialBudgetStatus } from "../types/SpecialBudget";
import type { Order } from "../types/Order";
import { InputableSelect } from "../components/InputableSelect";



const reasons: SpecialBudgetReason[] = [
  "Baixa Infraestrutura",
  "Complexidade do Serviço",
  "Indisponibilidade de Prestadores",
  "Trajeto Longo",
];

const statuses: SpecialBudgetStatus[] = [
  "Aguardando aprovação",
  "Aprovado",
  "Recusado",
];


export function FormSpecialBudget() {
  const { protocol } = useParams();
  const editMode = protocol != undefined;
  const { getOrders, addSpecialBudget } = useContext(OrderContext);

  const [order, setOrder] = useState<Order>();

  const navigate = useNavigate();


  async function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    let data = Object.fromEntries(formData.entries()) as any;

    addSpecialBudget(data).then(() => navigate("/"));
  }


function handleSelectOrder(protocol: string) {
  setOrder(() => {
    return getOrders().find(o => o.protocol === protocol);
  });
}



  return (
    <ViewContainer title={`${!editMode ? "Criar" : "Alterar"} Solicitação`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[800px]"
      >
        <InputableSelect name="protocol" onSelect={handleSelectOrder}/>


        <div className="flex gap-4">
          <Input
            value={order?.plate}
            readOnly
            blocked
            name="plate"
            label="Placa"
          />
          <Input
            value={order?.client}
            readOnly
            blocked
            name="client"
            label="Cliente Contratante"
          />
        </div>

        <Input
          required
          name="cost"
          type="number"
          label="Valor do Orçamento"
          placeholder="R$ 1.000,00"
        />
        <Select
          label="Motivo"
          name="reason"
          required
          options={reasons.map((r) => ({ label: r, value: r }))}
        />
        <Select
          label="Status"
          name="status"
          required
          options={statuses.map((s) => ({ label: s, value: s }))}
        />

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
