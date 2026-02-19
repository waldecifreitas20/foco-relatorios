import { PageTitle } from "~/components/PageTitle";
import { RsaForm } from "~/components/RsaForm";

export default function Order() {
 
  return (
    <main className="mx-auto w-[80%] block p-4">
      <PageTitle>Roadside Assistance</PageTitle>

      <RsaForm />
    </main>
  );
}