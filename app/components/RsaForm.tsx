import { useForm } from "react-hook-form";
import { providers } from "~/types/Provider";
import { services } from "~/types/Service";
import { serviceStatuses } from "~/types/ServiceStatus";
import { FormSection } from "./FormSection";
import { clients } from "~/types/Client";

export function RsaForm() {
  const { register } = useForm();

  return (
     <form className="bg-white border p-4 flex flex-col gap-5">

        <FormSection>
          {/* PLATE */}
          <div className="">
            <label>Placa:*</label>
            <input className="input" {...register("plate")} />
          </div>
          
          {/* MSP TICKET */}
          <div className="w-full">
            <label>Ticket:*</label>
            <input className="input" {...register("ticket")} />
          </div>

           {/* CLIENT */}
          <div className="w-full">
            <label>Cliente:*</label>
           <select className="input" {...register("client")} >
              {clients.map(client => (
                <option key={client} value={client}>{client}</option>
              ))}
            </select>
          </div>
        </FormSection>
 

        <FormSection>
          {/* SERVICE TYPE */}
          <div className="w-full">
            <label>Serviço:*</label>
            <select className="input" {...register("service")} >
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          {/* SERVICE STATUS */}
          <div className="w-full">
            <label>Status:*</label>
            <select className="input" {...register("statuses")} >
              {serviceStatuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        
          {/* PROVIDER */}
          <div className="w-full">
            <label>Fornecedor:*</label>
            <select className="input" {...register("provider")} >
              {providers.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </FormSection>
    
      
        <FormSection>
          {/* AGENT NAME */}
          <div className="w-1/2">
            <label>Acionado por:</label>
            <input className="input" {...register("agentName")} />
          </div>
      
          <section>
            {/* ETA */}
            <label className="block text-nowrap">Prévia Estimada:*</label>
            <div className="flex gap-2 items-center">
              <input className="input w-[100px]" {...register("eta")} />
              <span>minutos.</span>
            </div>
          </section>
        </FormSection>
  
        <section className="items-center flex gap-2">
          {/* HAS CHECKLIST */}
          <input type="checkbox" {...register("hasChecklist")} />
          <label>Possui checklist?</label>
        </section>

        <FormSection>
          <button>Salvar</button>
          <button className="flat">Cancelar</button>
        </FormSection>
      </form>
  );
}