import { useContext } from "react";
import { OrdersTable } from "../components/OrdersTable";
import { SearchBar, type SearchParams } from "../components/SearchBar";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";

export function Orders() {
  const {getOrders, search} = useContext(OrderContext)
  
    
  function handleSearch(params: SearchParams) {
    console.log(params);
    search(params);
  }

  return (
    <ViewContainer title="Histórico de Solicitações">
      <SearchBar onSearch={handleSearch} />
      <OrdersTable orders={getOrders()} />
    </ViewContainer>
  );
}
