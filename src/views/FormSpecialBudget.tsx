import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { Select } from "../components/Select";
import { useParams } from "react-router";
import type { SpecialBudgetReason, SpecialBudgetStatus } from "../types/SpecialBudget";
import { OrderSearcher } from "../components/OrderSearcher";
import { RouterContext } from "../provider/RouterContext";
import { specialBudgetService } from "../services/SpecialBudgetService";
import type { GetSpecialBudgetDto } from "../dto/specialbudget.dto";
import { LoadingFallback } from "../components/LoadingFallback";


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
  const {back} = useContext(RouterContext);
  const editMode = id != undefined;
  
  const [budget, setBudget] = useState<GetSpecialBudgetDto>();
  const isLoading = useRef(true);

  
  useEffect(() => {
    if (editMode) {
      specialBudgetService.getById(Number(id))
      .then((budget) => {

        setBudget(() => {
          isLoading.current = false;
          return budget;

        });
      });
    }
  }, []);

  async function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    let budget = Object.fromEntries(formData.entries()) as any;
    const {create, update} = specialBudgetService;

    if (editMode) {
      update({...budget, id}) 
      .then(() => back())
      .catch(error => alert(error));

    } else { 
      create(budget)
      .then(() => back())
      .catch(error => alert(error));
    }
  }

  if(isLoading.current) {
    return <LoadingFallback/>;
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
          blocked={editMode}
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
