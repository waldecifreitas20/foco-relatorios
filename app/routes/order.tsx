import { useForm } from "react-hook-form";
import { providers } from "~/types/Provider";
import { services } from "~/types/Service";
import { serviceStatuses } from "~/types/ServiceStatus";

export default function Order() {
  const { register } = useForm();
  
  return (
    <main className="mx-auto w-[80%] block">
      <h1>Roadside Assistance</h1>

      <form className="bg-white border p-4">

        <section className="flex gap-4 w-full">
          {/* PLATE */}
          <div className="">
            <label>Placa:*</label>
            <input className="input" {...register("plate")} />
          </div>

          {/* MSP TICKET */}
          <div className="">
            <label>Ticket:*</label>
            <input className="input" {...register("ticket")} />
          </div>
        </section>
        
        {/* CLIENT */}
        <div className="">
          <label>Cliente:*</label>
          <input className="input" {...register("client")} />
        </div>
        
        {/* SERVICE TYPE */}
        <div className="">
          <label>Serviço:*</label>
          <select className="input" {...register("service")} >
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
        
        {/* SERVICE STATUS */}
        <div className="">
          <label>Status:*</label>
          <select className="input" {...register("statuses")} >
            {serviceStatuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
       
        {/* PROVIDER */}
        <div className="">
          <label>Fornecedor:*</label>
          <select className="input" {...register("provider")} >
            {providers.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
       
        {/* ETA */}
        <div className="">
          <label>Prévia Estimada:*</label>
          <input className="input" {...register("eta")} />
        </div>
     
        {/* AGENT NAME */}
        <div className="">
          <label>Acionado por:</label>
          <input className="input" {...register("agentName")} />
        </div>
        
        {/* NOTES */}
        <div>
          <label>Observações:</label>
          <textarea className="input" {...register("notes")} />
        </div>
  
        {/* HAS CHECKLIST */}
        <div>
          <label>Tem checklist?</label>
          <input type="checkbox" {...register("hasChecklist")} />
        </div>

      </form>
    </main>
  );
}