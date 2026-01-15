type SpecialBudgetReason =
  | "Indisponibilidade de Prestadores"
  | "Trajeto Longo "
  | "Baixa Infraestrutura"
  | "Complexidade do Serviço";

type SpecialBudgetStatus = "Aguardando aprovação" | "Aprovado" | "Recusado";

export type SpecialBudget = {
  status: SpecialBudgetStatus;
  cost: number;
  wheelDollies?: number;
  additionalWheels?: number;
  daysParked?: number;
  uprighting?: boolean;
  groundWithdraw?: boolean;
  offRoad?: boolean;
  origin: string;
  destiny: string;
  workerBase: string;

  reason: SpecialBudgetReason;
  explanation: string;
};
