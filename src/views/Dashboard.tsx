import { useEffect, useRef, useState } from "react";
import { ViewContainer } from "../components/ViewContainer";
import type { Order } from "../types/Order";
import { Card } from "../components/Card";
import { Fallback } from "../components/Fallback";
import { orderService } from "../services/OrderService";
import type { ServiceStatus } from "../types/ServiceStatus";
import type { Service } from "../types/Service";

export function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const isLoading = useRef(true);

  useEffect(() => {
    orderService.getAll()
      .then((response) => {
        setOrders(() => response.orders);
      })
      .finally(() =>
        isLoading.current = false);


  }, []);

  const generalStats = [
    { label: "Total", value: orders.length },
    { label: "Cancelamentos", value: countOrders("status", "Cancelado") },
    { label: "Veículos em Base", value: countOrders("status", "Em base") },
    {
      label: "Atendimentos Finalizados",
      value: countOrders("status", "Concluído"),
    },
  ];

  const mainServices = [
    { label: "Guincho", value: countOrders("service", "Guincho") },
    {
      label: "Recarga de Bateria",
      value: countOrders("service", "Recarga de Bateria"),
    },
    {
      label: "Troca de Bateria",
      value: countOrders("service", "Troca de Bateria"),
    },
  ];

  const otherServices = [
    { label: "Chaveiro", value: countOrders("service", "Chaveiro") },
    { label: "Desatolamento", value: countOrders("service", "Desatolamento") },
    { label: "Troca de Pneu", value: countOrders("service", "Troca de Pneu") },
    { label: "Pane Seca", value: countOrders("service", "Pane Seca") },
  ];

  function countOrders(
    key: "service" | "status",
    value: ServiceStatus | Service
  ) {
    return orders.filter((o) => o[key] === value).length;
  }

  return (
    <>
      <ViewContainer title="Visão Geral" subtitle="Todos os atendimentos">
        {/* daily statistics */}
        <div
          className="
          bg-white 
          mb-10 
          border border-slate-200 rounded-lg 
          flex flex-wrap 
          py-4 
          justify-center w-full
          
          xl:flex-nowrap 
           "
        >
          {generalStats.map((stat, i) => {
            return (
              <div
                className={`block w-full ${i > 0 && "border-l border-slate-200"
                  } p-2 text-center`}
              >
                <p>{stat.label}</p>
                <Fallback display={!isLoading.current}>
                  <p className="text-4xl text-[var(--primary)]">{stat.value}</p>
                </Fallback>
              </div>
            );
          })}
        </div>

        <h2 className="md:text-xl mt-4 mb-4">Detalhamento dos Serviços</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 w-full mt-2">
          {mainServices.map((stat) => {
            return (
              <Fallback display={!isLoading.current}>
                <Card label={stat.label} value={stat.value} large />
              </Fallback>
            );
          })}
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2  gap-2 w-full mt-2">
          {otherServices.map((stat) => {
            return (
              <Fallback display={!isLoading.current}>
                <Card label={stat.label} value={stat.value} />
              </Fallback>
            );
          })}
        </div>
      </ViewContainer>
    </>
  );
}
