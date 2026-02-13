import { serviceStatuses } from "~/types/ServiceStatus";
import { Checkbox } from "./Checkbox";
import { Divider } from "./Divider";
import SectionTitle from "./SectionTitle";
import { clients } from "~/types/Client";
import { services } from "~/types/Service";

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
          <SectionTitle>CLIENTES</SectionTitle>

          <select>
            <option>Todos os clientes</option>
            {clients.map(client => {
              return <option>{client}</option>
            })}
          </select>
        </section>

        <Divider />

        <section>
          <SectionTitle>STATUS DA SOLICITAÇÃO</SectionTitle>
          {serviceStatuses.map(status => {
            return <Checkbox>{status}</Checkbox>
          })}
        </section>

        <Divider />

        <section>
          <SectionTitle>PERÍODO</SectionTitle>

          <label htmlFor="createdAt">Data de Criação: </label>
          <input type="date" name="createdAt" id="createdAt" />

          <label htmlFor="updatedAt">Atualizado em: </label>
          <input type="date" name="updatedAt" id="updatedAt" />
        </section>

        <Divider />

        <section>
          <SectionTitle>SERVIÇOS</SectionTitle>
          {services.map(service => {
            return <Checkbox>{service}</Checkbox>
          })}
        </section>

        <Divider />

        <section className="pb-4">
          <button className="block w-full my-2">Filtrar</button>
          <button className="flat p-0 w-fit my-0 mx-auto block">Limpar Campos</button>
        </section>

      </form>
    </aside>
  );
}