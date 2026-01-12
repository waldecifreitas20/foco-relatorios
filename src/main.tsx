import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./views/Dashboard.tsx";
import { Pendencies } from "./views/Pendencies.tsx";
import { Orders } from "./views/Orders.tsx";
import { NewSolicitation } from "./views/NewSolicitation.tsx";
import { OrderProvider } from "./provider/OrderContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<App />}
            children={[
              <Route path="/" element={<Dashboard />} />,
              <Route path="/pendencias" element={<Pendencies />} />,
              <Route path="/solicitacoes" element={<Orders />} />,
              <Route path="/nova-solicitacao" element={<NewSolicitation />} />
            ]}
          />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  </React.StrictMode>
);
