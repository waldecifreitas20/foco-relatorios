type Address = {
  state: string,
  city: string,
  fullAddress?: string,
}

type SpecialBudgetReason = 
"Indisponibilidade de Prestadores" |
"Trajeto Longo " |
"Baixa Infraestrutura" |
"Complexidade do Serviço" 


type SpecialBudgetStatus = 
"Aguardando aprovação" |
"Aprovado" |
"Recusado"

export type SpecialBudget = {
  status: SpecialBudgetStatus
  servicePrice: number,
  specialPrice: number,
  totalPrice: number,  
  wheelDollies? : number,
  additionalWheels? : number,
  daysParked? : number,
  uprighting? : boolean,
  groundWithdraw?: boolean,
  offRoad?: boolean,
  addresses: {
    origin: Address,
    destiny: Address,
    workerBase: Address,
  },
  reason: SpecialBudgetReason,
  explanation: string,
}