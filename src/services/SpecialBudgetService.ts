import axios, { AxiosError } from "axios";
import type { CreateSpecialBudgetDto, GetSpecialBudgetDto, UpdateSpecialBudgetDto } from "../dto/specialbudget.dto";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_ROUTE = `${API_URL}/special-budget`;

async function getAll(): Promise<GetSpecialBudgetDto[]> {
  return await axios
    .get(`${BASE_ROUTE}/all`).then(res => res.data.specialBudgets);
}


async function getById(id: number): Promise<GetSpecialBudgetDto> {
  const all = await getAll();
  const budget = all.find(budget => budget.id === id);

  if(!budget) {
    throw new Error("Orçamento Especial não encontrado!");
  }

  return budget;
}


async function create(specialBudget: CreateSpecialBudgetDto) {
  await axios
    .post(`${BASE_ROUTE}/create`, specialBudget)
    .catch((err: AxiosError<any>) => {
      const errorMessage = err.response?.data?.error?.toString() ?? "Não foi possivel concluir solicitação";
      throw new Error(errorMessage);
    });

  return true;
}

async function update(patch: UpdateSpecialBudgetDto) { 
  if (!patch.id) {
    throw new Error("Id não encontrado na requisição");
  }
    
  await axios
    .patch(`${BASE_ROUTE}/update`, {
      id: Number(patch.id),
      cost: Number(patch.cost),
      status: patch.status,
      reason: patch.reason,
    })
    .catch((err: AxiosError<any>) => {
      const errorMessage = err.response?.data?.error?.toString() ?? "Não foi possivel concluir solicitação";
      throw new Error(errorMessage);
    });
 
}

export const specialBudgetService = {
  getAll,
  getById,
  create,
  update,
}