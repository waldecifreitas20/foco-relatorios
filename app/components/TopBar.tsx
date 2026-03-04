import { Link } from "react-router";
import logo from "../assets/logo.png";
import coloredBar from "../assets/top-bg.svg";
import { Searchbar } from "./Searchbar";
import { useRouter } from "~/hooks/useRouter";

export default function TopBar() {
  const { getPath } = useRouter();

  return (
    <>
      <header className="sticky top-0 border-b border-slate-200">
        {/* 
        OMITTED
        <img className="block w-screen h-2 object-cover" src={coloredBar} /> 
      */}

        <div className="bg-white px-4 py-4 flex gap-8 items-center justify-start border-b border-slate-100">
          <Link
            to={getPath("/")}
            className="text-slate-500 hover:text-slate-800"
          >
            {/* 
            OMITTED
            <img className="block mr-10" src={logo} alt="Bosch" /> 
            */}
            Página Inicial
          </Link>

          <div className="w-1/2 max-w-[700px]">
            <Searchbar />
          </div>
        </div>
      </header>
    </>
  );
}