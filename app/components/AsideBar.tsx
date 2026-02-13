import { serviceStatuses } from "~/types/ServiceStatus";
import { Checkbox } from "./Checkbox";
import { Divider } from "./Divider";
import SectionTitle from "./SectionTitle";

export default function AsideBar() {
  return (
    <aside className="block h-full bg-white w-full max-w-[300px] px-4">
      <section>
        <h2 className="text-neutral-600 text-lg font-semibold mt-6
        ">FILTROS AVANÇADOS</h2>
        <Divider />
      </section>

      <form>
        <section>
          <SectionTitle>STATUS DA SOLICITAÇÃO</SectionTitle>

          {serviceStatuses.map(status => {
            return <Checkbox>{status}</Checkbox>
          })}

          <Divider />
        </section>

        <section>
          <SectionTitle>PERÍODO</SectionTitle>

          <label htmlFor="createdAt">Data de Criação: </label>
          <input className="border w-full mt-1 block border-neutral-200 bg-neutral-100 p-2 rounded-md" type="date" name="" id="createdAt" />
        
          <label htmlFor="updatedAt">Atualizado em: </label>
          <input className="border w-full mt-1 block border-neutral-200 bg-neutral-100 p-2 rounded-md" type="date" name="" id="createdAt" />
        </section>

          <Divider />
        <button className="block w-full my-4">Limpar Filtros</button>

      </form>
    </aside>
  );
}