import { serviceStatuses } from "~/types/ServiceStatus";
import { Checkbox } from "./Checkbox";
import { Divider } from "./Divider";
import SectionTitle from "./SectionTitle";
import { clients } from "~/types/Client";

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
          <input type="date" name="createdAt" id="createdAt" />

          <label htmlFor="updatedAt">Atualizado em: </label>
          <input type="date" name="updatedAt" id="updatedAt" />
        </section>

        <section>
          <SectionTitle>CLIENTES</SectionTitle>

          <select name="" id="">
            {clients.map(client => {
              return <option>{client}</option>
            })}
          </select>
        </section>

        <Divider />

        <button className="block w-full my-4">Filtrar</button>
        <button className="outlined w-fit my-0 mx-auto block">Limpar</button>

      </form>
    </aside>
  );
}