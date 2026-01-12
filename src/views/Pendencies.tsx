import { PendencyTable } from "../components/PendencyTable";
import { SearchBar } from "../components/SearchBar";
import { ViewContainer } from "../components/ViewContainer";

export function Pendencies() {
 
    
  return (
    <ViewContainer title="Atendimentos Pendentes">
      <SearchBar />
      <PendencyTable pendencies={[]} />
    </ViewContainer>
  );
}
