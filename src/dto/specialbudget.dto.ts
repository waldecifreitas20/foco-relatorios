import type { SpecialBudgetReason, SpecialBudgetStatus } from "../types/SpecialBudget";

export interface CreateSpecialBudgetDto {
  status: SpecialBudgetStatus;
  cost: number;
  wheelDollies?: number;
  additionalWheels?: number;
  daysParked?: number;
  isUprighted?: boolean;
  isOffRoad?: boolean;
  needGroundWithdraw?: boolean;
  origin: string;
  destiny: string;
  workerBase: string;
  reason: SpecialBudgetReason;
  explanation: string;
}