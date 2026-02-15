import { useState } from "react";
import { useClient } from "~/hooks/useClient";
import { storageService } from "~/services/StorageService";
import type { Order } from "~/types/Order";

export function Searchbar() {
  const orders = useClient(() => storageService.load("orders"));
  const [results, setResults] = useState<Order[]>(orders?? []);

  

  return (
    <>
      <form
        className="
        relative inline-block 
        text-slate-800 
        flex flex-nowrap justify-between 
        bg-slate-100 
        border border-slate-200 rounded-lg
        py-2 px-4">
        <input
          type="search"
          placeholder="Buscar Placas"
          className="w-[500px]"
        />
        <i className="block fa-brands fa-sistrix"></i>

        {results && (
          <ul 
            className="
            bg-white rounded-md 
            border border-slate-200 shadow-xl 
            w-full absolute top-full left-0 mt-1">
              {results.map(result => {
                return <p>
                  <span>{result.plate}</span>
                  <span>{result.client}</span>
                  <span>{result.service}</span>
                </p>
              })}
          </ul>
        )}

      </form>
    </>
  );
}