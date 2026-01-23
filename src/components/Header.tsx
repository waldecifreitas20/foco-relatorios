import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { appRoutes } from "../shared/routes";
import logo from "../assets/logo.png";
import { RouterContext } from "../provider/RouterContext";

const menuOption = [
  { label: "Visão Geral", link: appRoutes.dashboard },
  { label: "Pendências", link: appRoutes.pendencies.index },
  { label: "Orçamentos Especiais", link: appRoutes.budget.index },
  { label: "Atendimentos", link: appRoutes.orders.index },
];

export function Header() {
  const { pathname } = useLocation();
  const { goTo } = useContext(RouterContext);
  const [activeIndex, setActive] = useState(0);

  useEffect(() => {
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
          <img className="block h-8 w-fit" src={logo} alt="Bosch" />
          <p className="text-xs text-neutral-700 ml-[47px]">
            Monitoramento RSA
          </p>
        </h1>

        <div className="block">
          {/* NEW ORDER BUTTON */}
          <button
            className="
            text-white
            bg-[var(--primary)]
            hover:bg-[var(--primary-hover)]

            mt-10 mb-5

            cursor-pointer 
            rounded-[var(--border-radius)] 

            w-full 
            px-4 py-3 
            flex justify-between items-center
            "
            onClick={() => {
              setActive(-1);
              goTo(appRoutes.orders.create);
            }}
          >
            Novo Atendimento
            <i className="fa-solid fa-plus"></i>
          </button>

          {/* MENU OPTIONS */}
          <div
            className="
            overflow-clip 
            h-full text-slate-400 font-medium 
            "
          >
            {menuOption.map((opt, i) => {
              return (
                <p
                  onClick={() => {
                    setActive(i);
                    goTo(opt.link);
                  }}
                  className={`
        
                  ${
                    activeIndex === i
                      ? "text-[var(--primary)] bg-slate-50 pl-8 border-[var(--primary)]"
                      : "hover:text-slate-600 border-transparent"
                  }

                  border-l-4
                  transition-all duration-300
                  cursor-pointer 
                  block text-left
                  w-full 
                  px-4 py-3
                  `}
                >
                  {opt.label}
                </p>
              );
            })}
          </div>
        </div>
      </header>
    </>
  );
}
