import { useContext } from "react";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Button } from "../components/Button";

export function SpecialBudget() {
  const headStyle = "w-full block text-center";
  const { getSpecialBudgets } = useContext(OrderContext);

  return (
    <ViewContainer
      title="Orçamentos Especiais"
      trailing={
        <div className="ml-auto w-fit">
          <Button value="Novo Orçamento" />
        </div>
      }
    >
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
          grid grid-cols-6
          shadow-lg rounded-lg mb-2 
          w-full font-bold 
          bg-[var(--primary)] text-white  
          py-2
          "
        >
          <span className={"w-full block text-center}"}>Placa</span>
          <span className={headStyle}>Protocolo</span>
          <span className={headStyle}>Serviço</span>
          <span className={`${headStyle} col-span-2`}>Status</span>
          <span className={headStyle}>Data & Hora</span>
        </p>

        {getSpecialBudgets().map((order) => {
          const cellStyle = `
            w-full 
            flex items-center justify-center 
            text-center text-sm 
            border-l border-neutral-200
          `;

          return (
            <p
              className="
              grid grid-cols-6
              shadow-lg rounded-lg mb-2 
              bg-white hover:bg-neutral-50
              cursor-pointer
              w-full 
              justify-around items-center 
              text-neutral-600
              border border-neutral-200 
              py-6
              "
            >
              <span className={"w-full block text-center text-sm"}>
                {order.plate}
              </span>
              <span className={cellStyle}>{order.specialBudget?.cost}</span>
              <span className={cellStyle}>{order.service}</span>
              <span className={`${cellStyle} col-span-2`}>
                {order.specialBudget?.status}
              </span>
              <span className={cellStyle}>
                {new Date(order.date).toLocaleDateString()} às {order.hour}
              </span>
            </p>
          );
        })}
      </div>
    </ViewContainer>
  );
}
