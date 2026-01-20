import { useContext } from "react";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Button } from "../components/Button";
import { Link } from "react-router";
import { appRoutes } from "../shared/routes";

export function SpecialBudget() {
  const headStyle = "w-full block text-center";
  const { getSpecialBudgets } = useContext(OrderContext);
  const orders = getSpecialBudgets();
  console.log(orders);
  
  return (
    <ViewContainer
      title="Orçamentos Especiais"
      trailing={
        <div className="ml-auto w-fit">
          <Button>Novo Orçamento</Button>
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
        bg-white
        flex flex-col flex-wrap 
        font-normal 
        w-full 
        overflow-clip 
       
        text-center"
        >
          <p
            className="
          grid grid-cols-7
          shadow-lg rounded-lg mb-2 
          w-full font-bold 
          bg-[var(--primary)] text-white  
          py-2
          "
          >
            <span className={"w-full block text-center}"}>Placa</span>
            <span className={headStyle}>Protocolo</span>
            <span className={headStyle}>Serviço</span>
            <span className={headStyle}>Custo</span>
            <span className={`${headStyle} col-span-2`}>Status</span>
            <span className={headStyle}>Data & Hora</span>
          </p>

          {orders.map((order) => {
            const cellStyle = `
              w-full text-wrap px-2 
              flex items-center justify-center 
              text-center text-sm 
              border-l border-neutral-200
            `;

            return (
              <Link
              to={appRoutes.budget.create}
                className="
                grid grid-cols-7
                shadow-lg rounded-lg mb-2 
                bg-white hover:bg-neutral-50
                cursor-pointer
                w-full 
                justify-around items-center 
                text-neutral-600
                border border-neutral-200 
                py-2 h-24
                
                "
              >
                <span className={"w-full block text-center text-sm"}>{order.plate}</span>
                <span className={cellStyle}>{order.protocol.slice(-6)}</span>
                <span className={cellStyle}>{order.service}</span>
                <span className={cellStyle}>R$ {Number(order.specialBudget?.cost).toFixed(2).replace(".", ",  ")}</span>
                <span className={`${cellStyle} col-span-2`}>
                  {order.specialBudget?.status}
                </span>
                <span className={cellStyle}>
                  {new Date(order.date).toLocaleDateString()} {order.hour}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </ViewContainer>
  );
}
