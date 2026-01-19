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
    const allOrders = getOrders();

    if (props.onlyPendency) {
      setOrders(() => {
        return allOrders.filter(o => {
          return o.status !== "Concluído" &&
            o.status !== "Cancelado" &&
            o.status !== "Serviço frustrado";
        });
      })
    } else {
      setOrders(getOrders());
    }
  }, [props.onlyPendency]);


  function handleSearch(result: Order[]) {
    console.log(result);
    setOrders(result);
  }

  return (
    <ViewContainer title={props.title}>
      <SearchBar onResult={handleSearch} />
      <OrdersTable orders={orders} />
    </ViewContainer>
  );
}
