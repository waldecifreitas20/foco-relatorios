import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";
import { Select } from "../components/Select";
import type { ServiceStatus } from "../types/ServiceStatus";
import { Link, useNavigate, useParams } from "react-router";
import type { Order } from "../types/Order";
import { appRoutes } from "../shared/routes";
import { CLIENTS, PROVIDERS, SERVICES, STATUS } from "../mock/data";



export function FormOrder() {
  const { createOrder, getOrder, updateOrder } = useContext(OrderContext);
  const { protocol } = useParams();
  const [order, setOrder] = useState<Order>();
  const [serviceStatus, setServiceStatus] = useState<ServiceStatus | undefined>(
    order?.status
  );
  const editMode = protocol != undefined;
  const navigateTo = useNavigate();

  useEffect(() => {
    if (editMode) {
      setOrder(getOrder(protocol));
    } else {
      setOrder(undefined);
    }
  }, []);

  async function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    let { cost, ...order } = Object.fromEntries(formData.entries()) as any;

    if (cost) {
      order = {
        ...order,
        specialBudget: {
          cost,
          status: "Aguardando aprovação",
        },
      } as Order;
    }

    var action = createOrder;

    if (editMode) {
      action = updateOrder;
    }

    try {
      await action(order).then(() => {
        navigateTo(appRoutes.dashboard);
      });
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <ViewContainer title={`${!editMode ? "Criar" : "Alterar"} Solicitação`}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[800px]"
      >
        <Input
          readOnly={editMode}
          blocked={editMode}
          value={order?.protocol}
          name="protocol"
          label="Ticket"
          placeholder="3300-33000-a0b1-c2d3-e4f5-g6h7-8"
          required
        />

        <div className="flex gap-4">
          <Input value={order?.plate} name="plate" label="Placa" required />
          <Select
            required
            value={order?.serviceProvider}
            name="serviceProvider"
            label="Fornecedor"
            options={PROVIDERS.map((p) => ({ label: p, value: p }))}
          />
        </div>

        <div className="flex gap-4">
          <Select
            value={order?.client}
            name="client"
            label="Cliente Contratante"
            options={CLIENTS.map((c) => ({ label: c, value: c }))}
            required
          />
          <Select
            value={order?.service}
            name="service"
            label="Serviço"
            options={SERVICES.map((s) => ({ label: s, value: s }))}
            required
          />
        </div>

        <div className="flex gap-4">
          <Input
            required
            value={order?.date}
            name="date"
            type="date"
            label="Data"
          />
          <Input value={order?.hour} name="hour" type="time" label="Hora" />
        </div>

        <Select
          value={order?.status}
          name="status"
          label="Status"
          options={STATUS.map((s) => ({ label: s, value: s }))}
          required
          onSelect={(option) => setServiceStatus(option as ServiceStatus)}
        />

        {serviceStatus === "Aguardando aprovação de orçamento" && (
          <Input
            value={order?.specialBudget?.cost}
            name="cost"
            label="Valor do orçamento"
            placeholder="R$ 1.000,00"
            required
          />
        )}

        <div className="flex w-125 gap-4 flex-nowrap mt-10">
          <Link
            to={editMode ? appRoutes.pendencies.index : appRoutes.dashboard}
            className="
            bg-transparent 
            border-[var(--primary)] 
            text-[var(--primary)] 
            hover:text-white
            block text-center
            cursor-pointer
            hover:bg-[var(--primary-hover)]
            w-full py-3 px-10 rounded-[var(--border-radius)] border
            "
          >
            Cancelar
          </Link>

          <Button>{editMode ? "Salvar" : "Registrar"}</Button>
        </div>
      </form>
    </ViewContainer>
  );
}
