import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Select } from "../components/Select";
import { Link, useNavigate, useParams } from "react-router";
import { appRoutes } from "../shared/routes";
import type { SpecialBudget, SpecialBudgetReason, SpecialBudgetStatus } from "../types/SpecialBudget";

const reasons: SpecialBudgetReason[] = [
  "Baixa Infraestrutura",
  "Complexidade do Serviço",
   "Indisponibilidade de Prestadores",
   "Trajeto Longo ",
];

const statuses: SpecialBudgetStatus[] = [
  "Aguardando aprovação",
  "Aprovado",
  "Recusado"
]; 


export function FormSpecialBudget() {
  const { protocol } = useParams();
  const editMode = protocol != undefined;

  const navigateTo = useNavigate();

  const [specialBudget, setSpecialBudget] = useState<SpecialBudget>();
  const { updateOrder } = useContext(OrderContext);

  useEffect(() => {}, []);

  async function handleSubmit(evt: any) {
    evt.preventDefault();
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
          name="protocol"
          label="Ticket"
          placeholder="3300-33000-a0b1-c2d3-e4f5-g6h7-8"
          required

        />

        <div className="flex gap-4">
          <Input readOnly blocked name="plate" label="Placa" />
          <Input readOnly blocked name="client" label="Cliente Contratante" />
        </div>


          <Input 
            required
            name="cost" 
            type="number" 
            label="Valor do Orçamento" 
            placeholder="R$ 1.000,00"
          />

        <Select label="Motivo" name="reason" options={reasons} />
        <Select label="Status" name="status" options={statuses} />





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
