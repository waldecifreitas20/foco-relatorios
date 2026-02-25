import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import TopBar from "./components/TopBar";
import { OrderProvider } from "./provider/OrderProvider";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Monitoramento RSA | BOSCH" },
    { name: "description", content: "Monitoramento de Roadside Assitance" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          src="https://kit.fontawesome.com/28de0b46ad.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <OrderProvider>
          <TopBar />
          {children}
          <footer 
          className="mx-auto w-full text-slate-600 text-sm font-medium text-center">
            Powered by
            <a 
              target="_blank"
              href="https://waldecifreitas.vercel.app" 
              className="text-red-600"> Waldeci Freitas</a>
            </footer>
        </OrderProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const _error = error as any;
  let message = "Oops!";
  let details = "An unexpected error occurred.";

  console.error(error);
  
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="font-bold text-xl mb-4">{_error.message?? message}</h1>
      <p>{_error.stack ?? details}</p>
    </main>
  );
}
