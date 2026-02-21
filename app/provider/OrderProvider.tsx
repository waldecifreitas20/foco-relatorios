import type { Order } from "~/types/Order";
import { storageService } from "~/services/StorageService";
import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";



interface OrderContextValue {
  orders: Order[];
  loadCache: () => Order[];
  setCache: (data: Order[]) => void;
}

export const OrderContext = createContext({} as OrderContextValue);

export function OrderProvider({ children }: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const _orders = loadCache();
    if (_orders.length > 0) {
      setOrders(_orders);
    }
  }, []);

  function loadCache() {
    return (storageService.load("orders") ?? []) as Order[];
  }

  function setCache(data: Order[]) {
    storageService.save("orders", data);
  }



  return (
    <OrderContext.Provider
      value={{
        orders, 
        loadCache,
        setCache,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
