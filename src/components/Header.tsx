import { useState } from "react";
import { Link } from "react-router";
import { appRoutes } from "../shared/routes";
import logo from "../assets/logo.png";

const menuOption = [
  { label: "Visão Geral", link: "/" },
  { label: "Pendências", link: "/pendencias" },
  { label: "Orçamentos Especiais", link: "/orcamentos" },
  { label: "Atendimentos", link: "/solicitacoes" },
];


export function Header() {
  const [activeIndex, setActive] = useState(
    menuOption.findIndex((opt) => opt.link === document.location.pathname)
  );

  return (
    <>
      <header
        className={`
      bg-white 
      block 
      min-w-50 max-w-75 w-[25%] 
      h-screen 
      px-4 pb-8 
      border-r border-neutral-200
      `}
      >
        <h1 className="font-bold block border-b border-neutral-200 py-6">
          <img className="block h-8 w-fit" src={logo} alt="Bosch" />
          <p className="text-xs text-neutral-700 ml-11.75">
            Monitoramento RSA
          </p>
        </h1>

        <div className="block">
          {/* NEW ORDER BUTTON */}
          <Link
            to={appRoutes.orders.create}
            className="
          text-white
          bg-[var(--primary)]
          hover:bg-[var(--primary-hover)]

          mt-10 mb-5
          shadow-lg shadow-black/50

          cursor-pointer 
          rounded-md 

          w-full 
          px-4 py-3 
          flex justify-between items-center
        "
        onClick={() => setActive(-1)}
          >
            Novo Atendimento
            <i className="fa-solid fa-plus"></i>
          </Link>

          {/* MENU OPTIONS */}
          <div
            className="
        overflow-clip 
        h-full text-slate-400 font-medium 
        
        
        "
          >
            {menuOption.map((opt, i) => {
              return (
                <Link
                  to={opt.link}
                  onClick={() => setActive(i)}
                  className={`
            
            ${
              activeIndex === i
                ? "text-[var(--primary)] bg-slate-50 pl-8 border-[var(--primary)]"
                : "hover:text-slate-600 border-transparent"
            }
            border-l-4
            transition-all duration-300
            cursor-pointer 
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
        </div>
      </header>
    </>
  );
}
