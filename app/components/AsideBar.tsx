import { serviceStatuses } from "~/types/ServiceStatus";
import { Checkbox } from "./Checkbox";
import { Divider } from "./Divider";
import SectionTitle from "./SectionTitle";
import { clients } from "~/types/Client";
import { services } from "~/types/Service";
import { useRef } from "react";
import { Form } from "react-router";

export default function AsideBar() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <aside className="block h-full bg-white w-full max-w-[300px] px-6 rounded-md">
      <section>
        <h2 className="text-slate-600 text-lg font-semibold mt-6">
          FILTROS AVANÇADOS
        </h2>
      </section>

      <Divider />

      <Form method="post" ref={formRef}>
        <section>
          <SectionTitle>CLIENTES</SectionTitle>

          <select name="client">
            <option value={"all"}>Todos os clientes</option>
            {clients.map((client) => {
              return (
                <option key={client} value={client}>
                  {client}
                </option>
              );
            })}
          </select>
        </section>

        <Divider />

        <section>
          <SectionTitle>STATUS DA SOLICITAÇÃO</SectionTitle>
          {serviceStatuses.map((status) => {
            return (
              <Checkbox key={status} name="statuses" value={status}>
                {status}
              </Checkbox>
            );
          })}
        </section>

        <Divider />

        <section>
          <SectionTitle>SERVIÇOS</SectionTitle>
          {services.map((service) => {
            return (
              <Checkbox key={service} name="services" value={service}>
                {service}
              </Checkbox>
            );
          })}
        </section>

        <Divider />

        <section className="pb-4">
          <button className="block w-full my-2">Filtrar</button>

          <button
            onClick={() => formRef.current?.reset()}
            className="flat p-0 w-fit my-0 mx-auto block"
          >
            Limpar Campos
          </button>
        </section>
      </Form>
    </aside>
  );
}
