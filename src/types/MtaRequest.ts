export type MtaRequest = {
  status: "Cancelado" | "Concluído" | "Em andamento",
  destiny?: string;
  cost?: number;
  type?: "Uber" | "Táxi";
  plate?: string;
  totalDistance?: number;
  passengersQtd?:  number;
  vehicleModel?: string; 
}