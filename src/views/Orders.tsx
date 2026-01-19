import { useContext, useState } from "react";
import { OrdersTable } from "../components/OrdersTable";
import { SearchBar, type SearchParams } from "../components/SearchBar";
import { ViewContainer } from "../components/ViewContainer";
import type { Order } from "../types/Order";
import { OrderContext } from "../provider/OrderContext";

export function Orders() {
  const { getOrders } = useContext(OrderContext);
  const [orders, setOrders] = useState(getOrders());

  function handleSearch(result: Order[]) {
    console.log(result);
    setOrders(result);
  }

  return (
    <ViewContainer title="Histórico de Solicitações">
      <SearchBar onResult={handleSearch} />
      <OrdersTable orders={orders} />
    </ViewContainer>
  );
}
