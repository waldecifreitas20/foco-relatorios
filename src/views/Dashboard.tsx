import { ViewContainer } from "../components/ViewContainer";

export function Dashboard() {
  const todayDate = new Date(Date.now()).toLocaleDateString();
  const generalStats = [
    { label: "Total", value: 20 },
    { label: "Cancelamentos", value: 3 },
    { label: "Veículos em Base", value: 8 },
    { label: "Atendimentos Finalizados", value: 9 },
  ];

  const mainServices = [
    { label: "Guincho", value: 10 },
    { label: "Recarga de Bateria", value: 10 },
    { label: "Troca de Bateria", value: 10 },
  ];

  const otherServices = [
    { label: "Chaveiro", value: 10 },
    { label: "Desatolamento", value: 0 },
    { label: "Troca de Pneu", value: 0 },
    { label: "Pane Seca", value: 0 },
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
