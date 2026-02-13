import AsideBar from "~/components/AsideBar";
import type { Route } from "./+types/home";


export default function Home() {
  return (
    <main className="flex p-4">
      <AsideBar />
      <section className="max-w-[1000px] px-4">
        <h1 className="text-3xl font-semibold text-neutral-800">Painel de Monitoramento</h1>

        <section>
          
        </section>
      </section>
    </main>
  );
}
