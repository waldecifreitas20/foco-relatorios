import { useState } from "react";
import { Link } from "react-router";
import { appRoutes } from "../shared/routes";

const menuOption = [
  { label: "Visão Geral", link: appRoutes.dashboard },
  { label: "Pendências", link: appRoutes.pendencies.index },
  { label: "Orçamentos Especiais", link: appRoutes.budget.index },
  { label: "Atendimentos", link: appRoutes.orders.index },
];

export function Header() {
  const [activeIndex, setAtive] = useState(menuOption.findIndex(opt => opt.link === document.location.pathname));

  return (
    <header
      className={`bg-[var(--primary)] block w-[300px] h-screen text-white px-4 py-8 shrink-0`}
    >
      <h1 className="font-bold text-white block h-16">
        <img
          className="block h-full w-fit"
          src="	https://www.aluguefoco.com.br/img/layout/Logo_Foco_Site.png"
          alt="Foco Relatórios"
        />
      </h1>

      <div className="block">
        <Link
          to={appRoutes.orders.create}
          className="
                  
          hover:bg-red-950
          bg-red-950/80
          mt-10 mb-5
          shadow-lg shadow-black/50

          cursor-pointer 
          rounded-md 

          w-full 
          px-4 py-3 
          flex justify-between items-center
        "
        >
          Novo Atendimento
          <i className="fa-solid fa-plus"></i>
        </Link>
        {menuOption.map((opt, i) => {
          return (
            <Link
              to={opt.link}
              onClick={() => setAtive(i)}
              className={`
              
              ${activeIndex === i ? "bg-red-800/80 text-white" : "text-white/70"
                }
              hover:bg-red-800/50
              cursor-pointer 
              rounded-md 
              block 
              w-full 
              px-4 py-3
              `}
            >
              {opt.label}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
