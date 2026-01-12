import { Header } from "./components/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="flex">
      <Header />
      <main className="bg-neutral-100 w-full px-10 h-screen overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
