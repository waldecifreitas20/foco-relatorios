import { Checkbox } from "./Checkbox";
import SectionTitle from "./SectionTitle";

export default function AsideBar() {
  return (
    <aside className="bg-white max-h-screen h-full w-full max-w-[300px] px-4">
      <section>
        <h2 
        className="text-neutral-400 font-semibold py-4 
        border-b border-neutral-200
        ">FILTROS AVANÇADOS</h2>
      </section>

      <section>
        <SectionTitle>STATUS DA SOLICITAÇÃO</SectionTitle>

        <form>
          <Checkbox>Acionado</Checkbox>
          <Checkbox>Em Deslocamento</Checkbox>
          <Checkbox>Na Origem</Checkbox>
          <Checkbox>Em Base</Checkbox>
          <Checkbox>Concluído</Checkbox>
          <Checkbox>Cancelado</Checkbox>
        </form>
      </section>


    </aside>
  );
}