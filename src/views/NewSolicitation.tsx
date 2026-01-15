import { useContext } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";
import { OrderContext } from "../provider/OrderContext";

export function NewSolicitation() {
  const { createOrder } = useContext(OrderContext);

  function handleSubmit(evt: any) {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData.entries()) as any;

    createOrder(data);
  }

  return (
    <ViewContainer title="Registrar Nova Solicitação">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[1000px]">

        <div className="flex gap-4">
          <Input name="plate" placeholder="Placa" />
          <Input name="protocol" placeholder="Protocolo" />
        </div>

        <div className="flex gap-4">
          <Input name="service" placeholder="Serviço" />
          <Input name="date" type="date" placeholder="Data & Hora" />
          <Input name="hour" type="time" placeholder="Data & Hora" />
          <Input name="status" placeholder="Status" />
        </div>

        <div className="flex w-125 gap-4 flex-nowrap mt-10">
          <Button value="Cancelar" outlined />
          <Button value="Registrar" />
        </div>
      </form>
    </ViewContainer>
  );
}