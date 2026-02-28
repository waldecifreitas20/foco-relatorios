import { Link } from "react-router";
import { appRoutes } from "~/routes";

export default function NotFound404() {
  return (
    <main
      className="
      absolute inset-0 size-screen 
      flex items-center justify-center 
      text-center text-slate-800
      "
    >
      <section>
        <i className="fa-regular fa-face-sad-tear text-8xl"></i>
        <h1 className="text-center mt-2 text-4xl font-bold">Erro 404</h1>
        <p className="text-center mt-4 mb-6 text-xl font-bold">
          Página Não Encontrada!
        </p>
        
        <Link to={appRoutes.home}>
          <button>Voltar para o dashboard</button>
        </Link>

      </section>
    </main>
  );
}
