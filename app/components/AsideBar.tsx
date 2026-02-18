import { serviceStatuses, type ServiceStatus } from "~/types/ServiceStatus";
import { Checkbox } from "./Checkbox";
import { Divider } from "./Divider";
import SectionTitle from "./SectionTitle";
import { clients } from "~/types/Client";
import { services } from "~/types/Service";
import { useRef } from "react";
import type { FormFilters } from "~/types/FormFilters";
import { Link, useSearchParams } from "react-router";

export default function AsideBar() {
  const formRef = useRef<HTMLFormElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();


  function handleSubmit(evt: any) {
    evt.preventDefault();

    const data = new FormData(formRef.current as HTMLFormElement);
    const filters = sanitaze(data) as FormFilters;

    const newSearchParams = new URLSearchParams(searchParams);

    if (filters.client) {
      newSearchParams.set('client', filters.client);
    }

    if (filters.createdAt) {
      newSearchParams.set('createdAt', `${filters.createdAt.toLocaleDateString()}`);
    }

    if (filters.updatedAt) {
      newSearchParams.set('updatedAt', `${filters.updatedAt.toLocaleDateString()}`);
    }

    if (filters.statuses) {
      newSearchParams.set('statuses', filters.statuses.join(";"));
    }

    if (filters.services) {
      newSearchParams.set('services', filters.services.join(";"));
    }

    if ((filters.client as string) === "Todos os clientes") {
      newSearchParams.delete('client');
    } 

    // Update the URL
    setSearchParams(newSearchParams);

  }


  return (
    <aside className="block h-full bg-white w-full max-w-[300px] px-6 rounded-md">
      <section>
        <h2 className="text-slate-600 text-lg font-semibold mt-6
        ">FILTROS AVANÇADOS</h2>
      </section>

      <Divider />

      <form ref={formRef} onSubmit={handleSubmit}>
        <section>
          <SectionTitle>CLIENTES</SectionTitle>

          <select name="client">
            <option value={undefined}>Todos os clientes</option>
            {clients.map(client => {
              return <option key={client} value={client}>{client}</option>
            })}
          </select>
        </section>

        <Divider />

        <section>
          <SectionTitle>STATUS DA SOLICITAÇÃO</SectionTitle>
          {serviceStatuses.map(status => {
            return <Checkbox key={status} name="statuses" value={status}>{status}</Checkbox>
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
            return <Checkbox key={service} name="services" value={service}>{service}</Checkbox>
          })}
        </section>

        <Divider />

        <section className="pb-4">
          <button className="block w-full my-2">Filtrar</button>
          <Link to={"/"}>
            <button
              onClick={() => formRef.current?.reset()}
              className="flat p-0 w-fit my-0 mx-auto block"
            >Limpar Campos</button>
          </Link>
        </section>

      </form>
    </aside>
  );
}



function sanitaze(data: FormData) {
  let fields = {};

  const client = data.get("client");
  if (client !== "-1") {
    fields = {
      client,
    };
  }


  const statuses = data.getAll("statuses");
  if (statuses.length > 0) {
    fields = {
      ...fields,
      statuses,
    };
  }


  const services = data.getAll("services");
  if (services.length > 0) {
    fields = {
      ...fields,
      services,
    };
  }


  const createdAt = data.get("createdAt");
  if (createdAt !== "") {
    fields = {
      ...fields,
      createdAt: new Date(createdAt as string),
    };
  }


  const updatedAt = data.get("updatedAt");
  if (updatedAt !== "") {
    fields = {
      ...fields,
      updatedAt: new Date(updatedAt as string),
    };
  }

  return fields;
}