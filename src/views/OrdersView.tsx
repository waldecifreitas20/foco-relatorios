import { useContext, useEffect, useState } from "react";
import { OrdersTable } from "../components/OrdersTable";
import { SearchBar } from "../components/SearchBar";
import { ViewContainer } from "../components/ViewContainer";
import type { Order } from "../types/Order";
import { OrderContext } from "../provider/OrderContext";

interface OrdersProps {
  title: string;
  onlyPendency?: boolean;
}

export function Orders(props: OrdersProps) {
  const { getOrders } = useContext(OrderContext);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getOrders()
    .then((allOrders) => {

      if (props.onlyPendency) {
        setOrders(() => {
          return allOrders.filter((o) => {
            return (
              o.status !== "Concluído" &&
              o.status !== "Cancelado" &&
              o.status !== "Serviço frustrado"
            );
          });
        });

      } else {
        setOrders(allOrders);
      }
    });
  }, [props.onlyPendency]);


  function handleSearch(result: Order[]) {
    setOrders(result);
  }

  return (
    <ViewContainer title={props.title}>
      <SearchBar onResult={handleSearch} />
      {orders.length > 0 ? <OrdersTable orders={orders} /> : (
        <div className="h-full">
          <p
            className="
            w-full select-none 
            text-slate-400 font-normal 
            text-2xl text-center mt-50
            ">Não há atendimentos registrados</p>
        </div>
      )}
    </ViewContainer>
  );
}
