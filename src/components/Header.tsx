import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { appRoutes } from "../shared/routes";
import logo from "../assets/logo.png";

const menuOption = [
  { label: "Visão Geral", link: appRoutes.dashboard },
  { label: "Pendências", link: appRoutes.pendencies.index},
  { label: "Orçamentos Especiais", link: appRoutes.budget.index },
  { label: "Atendimentos", link: appRoutes.orders.index },
];

const boschLogo =
  "data:image/png;base64,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";

export function Header() {
  const {pathname} = useLocation();
  const [activeIndex, setActive] = useState(0);


  useEffect(()=> {
    setActive(menuOption.findIndex((opt) => opt.link === pathname));
  }, [pathname]);

  return (
    <>
      <header
        className={`
        bg-white 
        block 
        min-w-[200px] max-w-[300px] w-[25%] 
        h-screen 
        px-4 pb-8 
        border-r border-neutral-200
        `}
      >
        <h1 className="font-bold block border-b border-neutral-200 py-6">
          <img className="block h-8 w-fit" src={boschLogo} alt="Bosch" />
          <p className="text-xs text-neutral-700 ml-[47px]">
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
            
                  ${activeIndex === i
                    ? "text-[var(--primary)] bg-slate-50 pl-8 border-[var(--primary)]"
                    : "hover:text-slate-600 border-transparent"}
                  border-l-4
                  transition-all duration-300
                  cursor-pointer 
                  block 
                  w-full 
                  px-4 py-3
                  `}>{opt.label}</Link>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
