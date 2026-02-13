import SectionTitle from "./SectionTitle";

export default function AsideBar() {
  return (
    <aside className="bg-white h-screen w-full max-w-[300px] p-4">
      <section>
        <h2 
        className="text-neutral-400 font-semibold py-4 
        border-b border-neutral-200
        ">FILTROS AVANÇADOS</h2>
      </section>

      <section>
        <SectionTitle>STATUS DA SOLICITAÇÃO</SectionTitle>
        
      </section>


    </aside>
  );
}