import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useClient } from "~/hooks/useClient";
import { appRoutes } from "~/routes";
import { storageService } from "~/services/StorageService";
import type { Order } from "~/types/Order";


export function Searchbar() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const orders = (useClient(() => storageService.load("orders")) ??
    []) as Order[];
  const [results, setResults] = useState<Order[]>([]);

  function handleTyping(evt: any) {
    const value = evt.target.value;
    const matchs: Order[] = [];

    if (value.length === 0) {
      return setResults([]);
    }

    orders.forEach(order => {
      if (order.plate.toLowerCase().includes(value.toLowerCase())) {
        matchs.push(order);
      }
    });

    setResults(matchs);
  }


  function handleSubmit(evt: any) {
    evt.preventDefault();
    const searchString = new FormData(evt.target).get("search-input");

    navigate(`/search?match=${searchString}`);
  }

  return (
    <>
      {/* DROPDOWN DISPOSER */}
      {results.length > 0 &&
        <div
          onClick={() => setResults([])}
          className="bg-transparent fixed z-10 inset-0 h-full"></div>
      }

      <form
        onSubmit={handleSubmit}
        className="
        relative
        text-slate-800 
        flex flex-nowrap justify-between items-center
        bg-slate-100 
        border border-slate-200 rounded-lg
        py-2 px-4">
        <input
          ref={inputRef}
          name="search-input"
          type="search"
          placeholder="Buscar Placas"
          className="max-w-[500px] min-w-[300px] w-full"
          onChange={handleTyping}
        />
        <i className="block fa-brands fa-sistrix"></i>

        {results.length > 0 && (
          <ul
            className="
            bg-white rounded-b-lg 
            border shadow-2xl 
            w-full absolute top-full left-0 mt-1 p-2">
            {results.map(result => {
              return (
                <Link
                  to={appRoutes.orderView(result.ticket)}
                  onClick={() => {
                    setResults([]);
                    inputRef.current!.value = "";
                  }}
                  className="
                  z-20 block relative
                  text-left bg-white 
                  w-full text-slate-700 text-sm 
                  rounded-md p-2 
                  hover:bg-red-500 hover:text-slate-50 cursor-pointer">
                  <span>{result.plate}</span>
                  <div className="flex text-xs gap-2">
                    <span className="block text-xs">{new Date(result.createdAt ?? new Date(Date.now())).toLocaleDateString("pt-BR")}</span>
                    <span>-</span>
                    <span>{result.service}</span>
                    <span>-</span>
                    <span>{result.client}</span>
                  </div>
                </Link>
              );
            })}
          </ul>
        )}

      </form>
    </>
  );
}