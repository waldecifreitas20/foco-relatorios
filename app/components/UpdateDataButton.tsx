import { useEffect, useState } from "react";
import { useFetcher } from "react-router";

export function UpdateDataButton() {
  const fetcher = useFetcher();
  const [isUpdating, setIsUpdating] = useState(false);


  useEffect(() => {
    if (fetcher.state === "idle") {
      setIsUpdating(false);
    }
  }, [fetcher.state]);


  return (
    <fetcher.Form method="post">
      <input className="hidden" readOnly name="update" value={"true"}/>
      <button
        type="submit"
        className={`bg-slate-800 text-slate-200 ${isUpdating ? "opacity-70 cursor-not-allowed" : ""}`}
        onClick={() => setIsUpdating(true)}
      >
        Atualizar Dados
        <i
          className={`fa-solid ml-2 font-bold fa-rotate ${isUpdating ? "animate-spin" : ""}`}
        ></i>
      </button>
    </fetcher.Form>
  );
}