import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Select } from "../components/Select";
import { useParams } from "react-router";
import type { SpecialBudgetReason, SpecialBudgetStatus } from "../types/SpecialBudget";
import type { Order } from "../types/Order";
import { OrderSearcher } from "../components/OrderSearcher";
import { RouterContext } from "../provider/RouterContext";
import { specialBudgetService } from "../services/SpecialBudgetService";
import type { GetSpecialBudgetDto } from "../dto/specialbudget.dto";


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
  const { id, protocol } = useParams();
  const {back, goTo} = useContext(RouterContext);
  const editMode = id != undefined;

  const { getOrder } = useContext(OrderContext);
  const [order, setOrder] = useState<Order>();
  const [budget, setBudget] = useState<GetSpecialBudgetDto>();

  
  useEffect(() => {
    if (editMode) {
      specialBudgetService.getById(Number(id))
      .then((budget) => {
        setBudget(budget);
      });
    }
  }, []);

  async function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    let data = Object.fromEntries(formData.entries()) as any;

    if (editMode) {
      return specialBudgetService.update({...data, id}) 
      .then(() => back()).catch(error => alert(error));
    }

    specialBudgetService.create(data)
    .then(() => back()).catch(error => alert(error));
  }

  function handleSelectOrder(protocol: string) {
    setOrder(() => {
      return getOrder(protocol);
    });
  }

  return (
    <ViewContainer title={`${!editMode ? "Criar" : "Alterar"} Solicitação`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[800px]"
      >
        <OrderSearcher
          label="Ticket"
          required
          name="protocol"
          onSelect={handleSelectOrder}
          initialValue={protocol}
        />

        <div className="flex gap-4">
          <Input
            value={budget?.order.plate}
            readOnly
            blocked
            name="plate"
            label="Placa"
          />
          <Input
            value={budget?.order.client}
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
          value={budget?.cost}
        />
        <Select
          label="Motivo"
          name="reason"
          required
          value={editMode? (budget?.reason ?? "Não Informado"): undefined}
          options={reasons.map((r) => ({ label: r, value: r }))}
        />
        <Select
          label="Status"
          name="status"
          required
          value={budget?.status}
          options={statuses.map((s) => ({ label: s, value: s }))}
        />

        <div className="flex w-125 gap-4 flex-nowrap mt-10">
          <Button
            noSubmit
            outlined
            onClick={() => back()}
          >
            Cancelar
          </Button>

          <Button>{editMode ? "Salvar" : "Registrar"}</Button>
        </div>
      </form>
    </ViewContainer>
  );
}
