import { PendencyTable } from "../components/PendencyTable";
import { SearchBar } from "../components/SearchBar";
import { ViewContainer } from "../components/ViewContainer";

export function Orders() {
  return (
    <ViewContainer title="Histórico de Solicitações">
      <SearchBar />
      <PendencyTable pendencies={[]} />
    </ViewContainer>
  );
}
