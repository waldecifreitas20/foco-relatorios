import { PendencyTable } from "../components/PendencyTable";
import { SearchBar } from "../components/SearchBar";
import { ViewContainer } from "../components/ViewContainer";

export function SolicitationView() {
  return (
    <ViewContainer title="Histórico de Solicitações">
      <SearchBar />
      <PendencyTable pendencies={[]} />
    </ViewContainer>
  );
}
