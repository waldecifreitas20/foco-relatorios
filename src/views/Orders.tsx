import { useContext } from "react";
import { OrdersTable } from "../components/OrdersTable";
import { SearchBar } from "../components/SearchBar";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";

export function Orders() {
  const orders = useContext(OrderContext).getOrders();
    
  return (
    <ViewContainer title="Histórico de Solicitações">
      <SearchBar />
      <OrdersTable orders={orders} />
    </ViewContainer>
  );
}
