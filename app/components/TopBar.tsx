import { Link } from "react-router";
import logo from "../assets/logo.png";
import coloredBar from "../assets/top-bg.svg";


export default function TopBar() {
  const options: { label: string, path: string }[] = [
    { label: "Painel", path: "/" },
    { label: "Reporte Diário", path: "/" },
    { label: "Veículos em Base", path: "/" },
    { label: "Agendamentos", path: "/" },
  ];
  return (
    <>
      <header className="sticky top-0">
        <img className="block w-screen h-2 object-cover" src={coloredBar} />

        <div className="bg-white px-4 py-0 flex gap-4 items-center justify-start border-b border-neutral-100">
          <img className="block mr-10" src={logo} alt="Bosch" />
          <nav className="w-fit h-full flex gap-8 items-center">
            {options.map(op => {
              return <Link key={op.label} to={op.path} className="text-neutral-500 hover:text-neutral-900 block text-nowrap h-full leading-18">{op.label}</Link>
            })}
          </nav>
        </div>

      </header>
    </>
  );
}