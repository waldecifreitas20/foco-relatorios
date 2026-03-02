import { Link } from "react-router";
import logo from "../assets/logo.png";
import coloredBar from "../assets/top-bg.svg";
import { Searchbar } from "./Searchbar";
import { useRouter } from "~/hooks/useRouter";

export default function TopBar() {
  const { getPath } = useRouter();
  const options: { label: string; path: string }[] = [
    /*{ label: "Painel", path: "/" }, 
    { label: "Reporte Diário", path: "/" },
    { label: "Veículos em Base", path: "/" },
    { label: "Agendamentos", path: "/" }, */
  ];
  return (
    <>
      <header className="sticky top-0 border-b border-slate-200">
        <img className="block w-screen h-2 object-cover" src={coloredBar} />

        <div className="bg-white px-4 py-4 flex gap-8 items-center justify-start border-b border-slate-100">
          <Link to={getPath("/")}>
            <img className="block mr-10" src={logo} alt="Bosch" />
          </Link>

          {/* <nav className="w-fit h-full flex gap-8 items-center">
            {options.map(op => {
              return <Link
                key={op.label}
                to={op.path}
                className="text-slate-500 hover:text-slate-900 block text-nowrap h-full leading-18">
                {op.label}
              </Link>
            })}
          </nav> */}
          <div className="w-1/2 max-w-[700px]">
            <Searchbar />
          </div>
        </div>
      </header>
    </>
  );
}