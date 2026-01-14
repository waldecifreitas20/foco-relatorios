export type MtaStatus = "Cancelado" | "Concluído" | "Em andamento" | "Aguardando Aprovação";


export type MtaRequest = {
  status: MtaStatus;
  destiny?: string;
  cost?: number;
  type?: "Uber" | "Táxi" | "Anjo da Guarda";
  plate?: string;
  totalDistance?: number;
  passengersQtd?:  number;
  vehicleModel?: string; 
}