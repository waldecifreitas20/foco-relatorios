import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Select } from "./Select";

export function SearchBar() {
  type SearchType = "Placa" | "Serviço" | "Status";
  const [searchType, setSearchType] = useState<SearchType>("Placa");

  return (
    <div className="mt-4 mb-8 flex justify-between">
      <Select 
      options={["Placa", "Status", "Serviço"]}
      onSelected={() => {}}
      />      

      <div>
        <Button value="Pesquisar" />
      </div>
    </div>
  );
}
