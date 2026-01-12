import { type Order } from "../types/Order";
import { Row } from "./Row";

interface PendencyTableProps {
  pendencies: Array<Order>;
}

export function PendencyTable(props: PendencyTableProps) {
  return (
    <>
      <div
        className="
        bg-white 
        flex flex-col flex-wrap 
        font-normal 
        w-full 
        shadow-lg overflow-clip 
        rounded-lg 
        text-center">
        <Row
          options={props.pendencies} head={['Placa', 'Protocolo', 'Serviço', 'Status', 'Data']} />
      </div>
    </>
  );
}
