import { PageTitle } from "~/components/PageTitle";
import { lazy, Suspense } from "react";

// Load the form only when needed
const RsaForm = lazy(() => import("~/components/RsaForm").then(m => ({ default: m.RsaForm })));

export default function Order() {
  return (
    <main className="mx-auto w-[80%] block p-4">
      <PageTitle>Roadside Assistance</PageTitle>
      <Suspense fallback={<div>Loading Form...</div>}>
        <RsaForm />
      </Suspense>
    </main>
  );
}