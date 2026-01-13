import { type Order } from "../types/Order";

interface OrdersTableProps {
  orders: Array<Order>;
}

export function OrdersTable(props: OrdersTableProps) {
  const headStyle = "w-full block text-center";
  const { orders } = props;

  console.log(orders);

  return (
    <>
      <div
        className="
        bg-white 
        flex flex-col flex-wrap 
        font-normal 
        w-full 
      overflow-clip 
       
        text-center">

        <p
          className="
          grid grid-cols-6
          shadow-lg rounded-lg mb-2 
          w-full font-bold 
          bg-[var(--primary)] text-white  
          py-2
          ">
          <span className={"w-full block text-center}"}>Placa</span>
            < span className={headStyle}>Protocolo</span>
          <span className={headStyle}>Serviço</span>
          <span className={`${headStyle} col-span-2`}>Status</span>
          <span className={headStyle}>Data & Hora</span>

        </p>

        {props.orders.map((opt) => {
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
              ">
              <span className={"w-full block text-center text-sm"}>{opt.plate}</span>
              <span className={cellStyle}>{opt.protocol}</span>
              <span className={cellStyle}>{opt.service}</span>
              <span className={`${cellStyle} col-span-2`}>{opt.status}</span>
              <span className={cellStyle}>{new Date(opt.date).toLocaleDateString()} às {opt.hour}</span>
            </p>
          );
        })}
      </div>
    </>
  );
}
