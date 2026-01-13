import { useContext } from "react";
import {  OrdersTable} from "../components/OrdersTable";
import { SearchBar } from "../components/SearchBar";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";

export function Pendencies() {
  const orders = useContext(OrderContext).getOrders();
    
  return (
    <ViewContainer title="Atendimentos Pendentes">
      <SearchBar />
      <OrdersTable orders={orders.filter(o => o.status !== "Concluído")} />
    </ViewContainer>
  );
}
