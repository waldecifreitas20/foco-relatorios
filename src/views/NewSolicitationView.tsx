import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ViewContainer } from "../components/ViewContainer";

export function NewSolicitationView() {
  return (
    <ViewContainer title="Registrar Nova Solicitação">
      <form className="flex flex-col gap-4 max-w-[1000px]">
        
        <div className="flex gap-4">
          <Input placeholder="Placa" />
          <Input placeholder="Protocolo" />
        </div>

        <div className="flex gap-4">
          <Input placeholder="Serviço" />
          <Input type="datetime-local" placeholder="Data & Hora" />
          <Input placeholder="Status" />
        </div>

        <div className="flex  w-[500px] gap-4 flex-nowrap mt-10">
          <Button value="Cancelar" outlined />
          <Button value="Registrar" />
        </div>
      </form>
    </ViewContainer>
  );
}
