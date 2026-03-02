import { useEffect, useState } from "react";
import { useFetcher } from "react-router";
import { AnimatedSpinner } from "./Spinner";

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
      <input className="hidden" readOnly name="update" value={"true"} />
      <button
        type="submit"
        className={`
        bg-slate-800 text-slate-200 
        flex items-center
        ${isUpdating ? "opacity-70 cursor-not-allowed" : ""}`}
        onClick={() => setIsUpdating(true)}
      >
        <span className="hidden md:inline mr-2">Atualizar Dados</span>
        {isUpdating ? (
          <AnimatedSpinner animate />
        ) : (
          <i className="fa-solid font-bold fa-rotate"></i>
        )}
      </button>
    </fetcher.Form>
  );
}