import { Link } from "react-router";
import logo from "../assets/logo.png";



export default function TopBar() {
  const options: { label: string, path: string }[] = [
    { label: "Painel", path: "/" },
    { label: "Reporte Diário", path: "/" },
    { label: "Veículos em Base", path: "/" },
    { label: "Agendamentos", path: "/" },
  ];
  return (
    <header className="bg-white px-4 py-0 flex gap-4 items-center justify-start">
      <img className="block mr-10" src={logo} alt="Bosch" />

      <nav className="w-fit h-full flex gap-8 items-center">
        {options.map(op => {
          return <Link to={op.path} className="text-neutral-500 hover:text-neutral-900 block text-nowrap h-full leading-18">{op.label}</Link>
        })}
      </nav>
    </header>
  );
}