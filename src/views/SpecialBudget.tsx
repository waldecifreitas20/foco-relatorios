import { useContext } from "react";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Button } from "../components/Button";
import { appRoutes } from "../shared/routes";
import { TableRow } from "../components/Table/TableRow";
import { TableHead } from "../components/Table/TableHead";
import type { Order } from "../types/Order";
import { RouterContext } from "../provider/RouterContext";

export function SpecialBudget() {
  const headStyle = "w-full block text-center";
  const { getSpecialBudgets, getOrder } = useContext(OrderContext);
  const { goTo } = useContext(RouterContext);

  const specialBudgets = getSpecialBudgets();
  const orders = specialBudgets.map(specialBudget => {
    const { specialBudgets, ...order } = getOrder(specialBudget.orderProtocol) as any as Order;
    return {
      ...order,
      specialBudget
    }
  });

  return (
    <ViewContainer
      title="Orçamentos Especiais"
      trailing={
        <div className="ml-auto w-fit">
          <Button onClick={() => goTo(appRoutes.budget.create)}>Novo Orçamento</Button>
        </div>
      }
    >
      {orders.length > 0 || (
        <div className="h-full">
          <p
            className="
            w-full select-none 
            text-slate-400 font-normal 
            text-2xl text-center mt-50
            ">Não há orçamentos para verificar</p>
        </div>
      )}

      {orders.length > 0 && (
        <div
          className="
        flex flex-col flex-wrap 
        font-normal 
        w-full 
        overflow-clip 
       
        text-center"
        >
          <TableHead extendedCells={1}>
            <span className={"w-full block text-center}"}>Placa</span>
            <span className={headStyle}>Protocolo</span>
            <span className={headStyle}>Cliente</span>
            <span className={headStyle}>Serviço</span>
            <span className={headStyle}>Custo</span>
            <span className={`${headStyle} col-span-2`}>Status</span>
            <span className={headStyle}>Data & Hora</span>
          </TableHead>

          {orders.map((order) => {
            const cellStyle = `
              w-full text-wrap px-2 
              flex items-center justify-center 
              text-center text-sm 
              border-l border-neutral-200
            `;

            return (
              <TableRow linkTo={appRoutes.budget.edit(order.protocol)} extendedCells={1}>
                <span className={"w-full block text-center text-sm"}>{order.plate}</span>
                <span className={cellStyle}>{order.protocol.slice(-6)}</span>
                <span className={cellStyle}>{order.client}</span>
                <span className={cellStyle}>{order.service}</span>
                <span className={cellStyle}>R$ {Number(order.specialBudget?.cost).toFixed(2).replace(".", ",  ")}</span>
                <span className={`${cellStyle} col-span-2`}>
                  {order.specialBudget?.status}
                </span>
                <span className={cellStyle}>
                  {new Date(order.date).toLocaleDateString()} {order.hour}
                </span>
              </TableRow>
            );
          })}
        </div>
      )}
    </ViewContainer>
  );
}
