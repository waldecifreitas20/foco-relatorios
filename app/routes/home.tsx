import AsideBar from "~/components/AsideBar";
import type { Route } from "./+types/home";
import TopBar from "~/components/TopBar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <TopBar />
      <AsideBar />
      <h1>Dashboard</h1>

    </>
  );
}
