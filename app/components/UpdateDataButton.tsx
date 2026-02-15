import { useEffect, useState } from "react";

export function UpdateDataButton() {
  const [isUpdating, setIsUpdating] = useState(false);


  useEffect(() => {
    let displayMessage = false;

    const timeout = setTimeout(() => {
      if (isUpdating) {
        setIsUpdating(false);
        displayMessage = true;
      }
    }, 1000);

    return () => {
      clearInterval(timeout);
      if (displayMessage) {
        alert("Dados Atualizados!")
      }
    };
  }, [isUpdating]);

  return (
    <button disabled={isUpdating} className={`bg-slate-800 text-slate-200 ${isUpdating ? "opacity-70 cursor-not-allowed" : ""}`} onClick={() => setIsUpdating(true)}>
      Atualizar Dados
      <i className={`fa-solid ml-2 font-bold fa-rotate ${isUpdating ? "animate-spin" : ""}`}></i>
    </button>
  );
}