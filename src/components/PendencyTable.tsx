import { type ServiceRequest } from "../types/ServiceResquest";
import { Row } from "./Row";

interface PendencyTableProps {
  pendencies: Array<ServiceRequest>;
}

export function PendencyTable(props: PendencyTableProps) {
  return (
    <>
      <div className="bg-white flex flex-col flex-wrap w-full font-normal w-full shadow-lg overflow-clip rounded-lg text-center">
        <Row options={props.pendencies} />
      </div>
    </>
  );
}
