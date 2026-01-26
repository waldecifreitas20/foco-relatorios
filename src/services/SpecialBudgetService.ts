import axios, { AxiosError } from "axios";
import type { CreateSpecialBudgetDto, GetSpecialBudgetDto } from "../dto/specialbudget.dto";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_ROUTE = `${API_URL}/special-budget`;

async function getAll(): Promise<GetSpecialBudgetDto[]> {
  return await axios
    .get(`${BASE_ROUTE}/all`).then(res => res.data.specialBudgets);
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

async function update() { }

export const specialBudgetService = {
  getAll,
  create
}