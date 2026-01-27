import { useContext, useEffect, useState } from "react";
import { ViewContainer } from "../components/ViewContainer";
import { Button } from "../components/Button";
import { appRoutes } from "../shared/routes";
import { TableRow } from "../components/Table/TableRow";
import { TableHead } from "../components/Table/TableHead";
import { RouterContext } from "../provider/RouterContext";
import { specialBudgetService } from "../services/SpecialBudgetService";
import type { SpecialBudget } from "../types/SpecialBudget";
import type { GetSpecialBudgetDto } from "../dto/specialbudget.dto";

export function SpecialBudget() {
  const headStyle = "w-full block text-center";
  const [specialBudgets, setSpecialBudget] = useState<GetSpecialBudgetDto[]>([]);
  const { goTo } = useContext(RouterContext);


  useEffect(() => {
    specialBudgetService
    .getAll()
    .then(budgets => setSpecialBudget(budgets));
  }, []);


  return (
    <ViewContainer
      title="Orçamentos Especiais"
      trailing={
        <div className="ml-auto w-fit">
          <Button onClick={() => goTo(appRoutes.budget.create)}>Novo Orçamento</Button>
        </div>
      }
    >
      {specialBudgets.length > 0 || (
        <div className="h-full">
          <p
            className="
            w-full select-none 
            text-slate-400 font-normal 
            text-2xl text-center mt-50
            ">Não há orçamentos para verificar</p>
        </div>
      )}

      {specialBudgets.length > 0 && (
        <div
          className="
        flex flex-col flex-wrap 
        font-normal 
        w-full 
        overflow-clip 
       
        text-center"
        >
          <TableHead extendedCells={1}>
            <span className={headStyle}>Id</span>
            <span className={"w-full block text-center}"}>Placa</span>
            <span className={headStyle}>Protocolo</span>
            <span className={headStyle}>Cliente</span>
            <span className={headStyle}>Serviço</span>
            <span className={headStyle}>Custo</span>
            <span className={`${headStyle} col-span-2`}>Status</span>
          </TableHead>

          {specialBudgets.map((budget) => {
            const cellStyle = `
              w-full text-wrap px-2 
              flex items-center justify-center 
              text-center text-sm
              border-l border-neutral-200
            `;

            return (
              <TableRow linkTo={appRoutes.budget.edit(budget.orderProtocol, `${budget.id}`)} extendedCells={1}>
                <span className={"w-full block text-center text-sm"}>{budget.id}</span>              
                <span className={cellStyle}>{budget.order.plate}</span>
                <span className={cellStyle}>{budget.orderProtocol.slice(-6)}</span>
                <span className={cellStyle}>{budget.order.client}</span>
                <span className={cellStyle}>{budget.order.service}</span>
                <span className={cellStyle}>R$ {Number(budget.cost).toFixed(2).replace(".", ",  ")}</span>
                <span className={`${cellStyle} col-span-2`}>
                  {budget.status}
                </span>
              </TableRow>
            );
          })}
        </div>
      )}
    </ViewContainer>
  );
}
