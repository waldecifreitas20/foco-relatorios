import { Input } from "./Input";

export function SearchBar() {
  return (
    <>
      <form className="mt-4 mb-8 flex gap-5">
        <Input
          placeholder="Pesquise por placa, protocolo, serviço..."
        />
        <button className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-4 px-10 rounded-lg shadow-lg">
          Pesquisar
        </button>
      </form>
    </>
  );
}
