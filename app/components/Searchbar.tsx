import { useState } from "react";
import { useClient } from "~/hooks/useClient";
import { storageService } from "~/services/StorageService";
import type { Order } from "~/types/Order";
import { Badge } from "./Bagde";

export function Searchbar() {
  const orders = useClient(() => storageService.load("orders"));
  const [results, setResults] = useState<Order[]>([]);



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

        {results.length > 0 && (
          <ul
            className="
            bg-white rounded-b-lg 
            border shadow-2xl 
            w-full absolute top-full left-0 mt-1 p-2">
            {results.map(result => {
              return <p className="text-slate-700 text-sm rounded-md p-2 hover:bg-red-500 hover:text-slate-50 cursor-pointer">
                <span>{result.plate}</span>
                <div className="flex text-xs gap-2">
                  <span className="block text-xs">{new Date(result.createdAt).toLocaleDateString("pt-BR")}</span>
                  <span>-</span>
                  <span>{result.service}</span>
                  <span>-</span>
                  <span>{result.client}</span>
                </div>
              </p>
            })}
          </ul>
        )}

      </form>
    </>
  );
}