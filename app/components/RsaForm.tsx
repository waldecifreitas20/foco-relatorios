import { useForm } from "react-hook-form";
import { providers } from "~/types/Provider";
import { services } from "~/types/Service";
import { serviceStatuses } from "~/types/ServiceStatus";
import { FormSection } from "./FormSection";
import { clients } from "~/types/Client";
import { useRef, useState } from "react";
import { Link } from "react-router";
import { appRoutes } from "~/routes";

export function RsaForm() {
  const { register, handleSubmit } = useForm();

  const [notes, setNotes] = useState<string[]>([
    "informado previa de 50 minutos, mas o técnico chegou em 30 minutos.", 
    "Prestador não chegou ao local, mesmo com o cliente informando que estava aguardando a chegada do técnico.", 
    "Cliente entrou em contato para informar que o técnico chegou, mas não conseguiu realizar o serviço por falta de peças."
  ]);

  function handleAddNote() {
    const note = (document.getElementById("notes") as HTMLTextAreaElement)?.value;

    if (note) {
      setNotes(prev => [...prev, note]);
    }
  }

  function handleFormSubmit(data: any) {
    console.log({...data, notes});
  }


  return (
     <form 
      className="flex justify-between gap-4" 
      onSubmit={handleSubmit(handleFormSubmit)}>

        <section className="w-[75%] bg-white border p-4 flex flex-col gap-5">
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


        <section className="items-center flex gap-2">
          {/* HAS CHECKLIST */}
          <input type="checkbox" {...register("hasChecklist")} />
          <label>Possui checklist?</label>
        </section>


        <FormSection>
          <button>Salvar</button>
          <Link to={appRoutes.home}><button className="flat">Cancelar</button></Link>
        </FormSection>

        </section>

         {/* NOTES */}
        <section className="bg-white border p-4 w-[25%]">
          <label>Observações:</label>

          <ul className="overflow-y-auto flex flex-col justify-start text-slate-700 h-[200px] ">
            {notes.map((item) => (
              <li key={item} className="text-xs border-y p-2">
                {item}
              </li>
            ))}
          </ul>

          <textarea
          id="notes"
          className="resize-none input text-sm h-[100px] mt-4" 
          />

          <button 
          type="button" 
          className="mt-4 bg-slate-800"
          onClick={() => handleAddNote()}
          >Adicionar</button>
        </section>

      </form>
  );
}