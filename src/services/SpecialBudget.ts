import axios from "axios";
import type { GetSpecialBudgetDto } from "../dto/specialbudget.dto";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_ROUTE = `${API_URL}/special-budget`;

async function getAll(): Promise<GetSpecialBudgetDto[]> {
  return await axios
    .get(`${BASE_ROUTE}/all`).then(res => res.data.specialBudgets);
}

export const specialBudgetService = {
  getAll,
}