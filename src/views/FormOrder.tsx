import { useContext, useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { Select } from "../components/Select";
import { useParams } from "react-router";
import type { Order } from "../types/Order";
import { appRoutes } from "../shared/routes";
import { CLIENTS, SERVICES, STATUS } from "../mock/data";
import { RouterContext } from "../provider/RouterContext";
import { orderService } from "../services/OrderService";
import { OrderContext } from "../provider/OrderContext";


export function FormOrder() {
  const { protocol } = useParams();
  const editMode = protocol != undefined;
  const { getOrder } = useContext(OrderContext);

  const [order, setOrder] = useState<Order>();
  const { back, goTo } = useContext(RouterContext);
  const serviceStatuses = getServiceStatuses();


  useEffect(() => {
    if (editMode) {
      const order = getOrder(protocol);
      setOrder(order);
    } else {
      setOrder(undefined);
    }
  }, []);

  function getServiceStatuses() {
    let statuses = [...STATUS];

    statuses = statuses.filter(s => s !== "Aguardando aprovação de orçamento");

    return statuses.map((s) => ({ label: s, value: s }));
  }


  async function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    let order = Object.fromEntries(formData.entries()) as any;
    const { createOrder, updateOrder } = orderService;


    try {
      if (editMode) {
        await updateOrder(order);
      } else {
        await createOrder(order);
      }

      goTo(appRoutes.dashboard);

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
          <Input
            required
            value={order?.providerProtocol}
            name="providerProtocol"
            label="Protocolo Fornecedor"
            placeholder="AMP009999"
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
          options={serviceStatuses}
          required
        />

        <div className="flex w-125 gap-4 flex-nowrap mt-10">
          <Button
            onClick={(evt) => {
              evt.preventDefault();
              back();
            }}
            outlined
          >
            Cancelar
          </Button>

          <Button>{editMode ? "Salvar" : "Registrar"}</Button>
        </div>
      </form>
    </ViewContainer>
  );
}
