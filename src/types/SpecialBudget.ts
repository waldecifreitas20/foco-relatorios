export type SpecialBudgetReason =
  | "Indisponibilidade de Prestadores"
  | "Trajeto Longo "
  | "Baixa Infraestrutura"
  | "Complexidade do Serviço";

export type SpecialBudgetStatus = "Aguardando aprovação" | "Aprovado" | "Recusado";

export type SpecialBudget = {
  id: number;
  status: SpecialBudgetStatus;
  cost: number;
  wheelDollies?: number;
  additionalWheels?: number;
  daysParked?: number;
  isUprighted?: boolean;
  groundWithdraw?: boolean;
  offRoad?: boolean;
  origin: string;
  destiny: string;
  workerBase: string;
  reason: SpecialBudgetReason;
  explanation: string;
};
