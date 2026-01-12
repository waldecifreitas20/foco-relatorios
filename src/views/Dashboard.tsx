import { useContext } from "react";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";

export function Dashboard() {
  const todayDate = new Date(Date.now()).toLocaleDateString();
  const { getOrders } = useContext(OrderContext);
  const orders = getOrders();

  const generalStats = [
    { label: "Total", value: orders.length },
    { label: "Cancelamentos", value: orders.filter(o => o.status === "Cancelado").length },
    { label: "Veículos em Base", value: orders.filter(o => o.status === "Em base").length },
    { label: "Atendimentos Finalizados", value: orders.filter(o => o.status === "Concluído").length },
  ];

  const mainServices = [
    { label: "Guincho", value: orders.filter(o => o.service === "Guincho").length },
    { label: "Recarga de Bateria", value: orders.filter(o => o.service === "Recarga de Bateria").length },
    { label: "Troca de Bateria", value: orders.filter(o => o.service === "Troca de Bateria").length },
  ];

  const otherServices = [
    { label: "Chaveiro", value: orders.filter(o => o.service === "Chaveiro").length },
    { label: "Desatolamento", value: orders.filter(o => o.service === "Desatolamento").length },
    { label: "Troca de Pneu", value: orders.filter(o => o.service === "Troca de Pneu").length },
    { label: "Pane Seca", value: orders.filter(o => o.service === "Pane Seca").length },
  ]

  return (
    <>
      <ViewContainer title="Visão Geral">
        {/* day's summary */}

        <div className="bg-white mb-10 border shadow-lg rounded-lg flex flex-wrap py-4 xl:flex-nowrap justify-center w-full ">
          {generalStats.map((stat) => {
            return (
              <div className="block w-full w-full border-l p-2 text-center">
                <p>{stat.label}</p>
                <p className="text-4xl text-red-600">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <h2 className="md:text-xl mt-4 mb-4">Detalhamento dos Serviços</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-2 w-full mt-2">
          {mainServices.map((stat) => {
            return (
              <div className="bg-white flex flex-col justify-between py-8 block w-full font-medium w-full shadow-lg p-2 rounded-lg text-center">
                <p>{stat.label}</p>
                <p className="text-6xl text-red-600">{stat.value}</p>
              </div>
            );
          })}
        </div>


        <div className="grid md:grid-cols-4 grid-cols-2  gap-2 w-full mt-2">
          {otherServices.map((stat) => {
            return (
              <div className="bg-white flex flex-col justify-between py-4 block w-full font-medium w-full shadow-lg p-2 rounded-lg text-center">
                <p>{stat.label}</p>
                <p className="text-4xl text-red-600">{stat.value}</p>
              </div>
            );
          })}
        </div>


      </ViewContainer>
    </>
  );
}
