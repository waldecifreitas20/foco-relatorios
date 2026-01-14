import { useState } from "react";

export function SearchBar() {
  type SearchType = "Placa" | "Serviço" | "Status";
  const [searchType, setSearchType] = useState<SearchType>("Placa");

  return (
    <>
      <form className="mt-4 mb-8 flex">
        <div className="bg-white w-full flex items-center shadow-lg rounded-lg overflow-clip">
          {/* select opener  */}
          <button
            className="text-sm block h-full text-neutral-500 text-center w-48 hover:bg-neutral-100"
          > {searchType} <i className="fa-solid fa-angle-down"></i></button>

          <span className="h-[50%] border-r border-neutral-200" />
          <input
            className="block w-full px-4"
            placeholder=""
          />
        </div>
        <button className="ml-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-4 px-10 rounded-lg shadow-lg">
          Pesquisar
        </button>
      </form>
    </>
  );
}
