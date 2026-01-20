import { Header } from "./components/Header";
import { Outlet } from "react-router";
import topBackground from "./assets/top-bg.svg";

function App() {
  return (
    <>
      <p
        className="block w-screen absolute top-0 h-1 z-500"
        style={{
          background: `url(${topBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></p>
      <div className="flex h-max">
        <Header />
        <main className="bg-neutral-100 w-full py-5 lg:px-10 h-screen overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
