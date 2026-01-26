import { AppDatabase } from "../../database/connection.js";
import { CreateSpecialBudgetDto, UpdateSpecialBudgetDto } from "../../dto/specialbudget.dto";

export class SpecialBudgetRepository {
	table = AppDatabase.specialBudget;


	async create(specialBudget: CreateSpecialBudgetDto) {
		return await this.table.create({
			data: {
				cost: Number(specialBudget.cost) ?? 0,
				status: specialBudget.status,
				orderProtocol: specialBudget.protocol,
				reason: specialBudget.reason,
			},
		});
	}


	async update(patch: UpdateSpecialBudgetDto) {
		return await this.table.update({
			where: {
				id: patch.id,
			},
			data: {
				cost: patch.cost,
				reason: patch.reason,
				status: patch.status,
			}
		});
	}


	async getAll() {
		return await this.table.findMany({
			include: { fk_order_protocol: true },
			omit: {
				additionalWheels: true,
				daysParked: true,
				destiny: true,
				explanation: true,
				isGroundWithdraw: true,
				isOffRoad: true,
				isUprighted: true,
				origin: true,
				wheelDolliesQtd: true,
				workerBase: true,
			}
		});
	}
}



