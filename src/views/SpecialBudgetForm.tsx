import { useContext, useEffect, useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { ViewContainer } from "../components/ViewContainer";
import type { SpecialBudgetReason } from "../types/SpecialBudget";
import { OrderContext } from "../provider/OrderContext";

interface SpecialBudgetFormProps {
  editMode?: boolean;
}


const SPECIAL_BUDGET_REASONS: SpecialBudgetReason[] = [
  "Baixa Infraestrutura",
  "Complexidade do Serviço",
  "Indisponibilidade de Prestadores",
  "Trajeto Longo ",
];


export function SpecialBudgetForm(props: SpecialBudgetFormProps) {
  const { getOrders } = useContext(OrderContext);
  const [orders, setOrders] = useState<string[]>([]);


  useEffect(() => {
    const _orders = getOrders()
      .map(o => `${o.protocol} | ${o.plate} | ${o.service}`);

    setOrders(_orders);
  }, []);


  return (
    <ViewContainer title="Solicitação de Orçamento Especial">
      <form>
        <Select name="protocol" label="Solicitação" options={orders} />

        <Input required label="Valor" />
        <Input required label="Valor" />
        <Input required label="Endereço origem" />
        <Input required label="Cidade da Base" />
        <Input required label="Endereço destino" />

        <Select label="Motivo" name="reason" options={SPECIAL_BUDGET_REASONS} />



        <div>
          <label htmlFor="off-road">Fora da Via?</label>
          <input id="off-road" type="checkbox" />
        </div>

        <div>
          <label htmlFor="up-righted">Capotado?</label>
          <input id="up-righted" type="checkbox" />
        </div>

        <Select label="Rodas Universais" name="additionalWheels" options={["0", "1", "2", "3"]} />
        <Select label="Patins" name="wheelDollies" options={["0", "1", "2", "3"]} />

        <div>
          <label htmlFor="explanation">Justificativa:</label>
          <textarea
            id="explanation"
            className="
            bg-white h-50 w-full border
            resize-none border-neutral-200
            shadow-lg rounded-lg outline-none 
            p-4 text-neutral-500
            "></textarea>
        </div>

      </form>
    </ViewContainer>
  );
}