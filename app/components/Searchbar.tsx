export function Searchbar() {
  return (
    <form className="inline-block text-slate-800 flex flex-nowrap justify-between bg-slate-100 border border-slate-200 rounded-full py-2 px-4">
      <input
        type="search"
        placeholder="Buscar Placas"
        className="w-[500px]"
      />
      <i className="block fa-brands fa-sistrix"></i>
    </form>
  );
}