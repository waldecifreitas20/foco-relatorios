import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./views/Dashboard.tsx";
import { Orders } from "./views/OrdersView.tsx";
import { FormOrder } from "./views/FormOrder.tsx";
import { OrderProvider } from "./provider/OrderContext.tsx";
import { SpecialBudget } from "./views/SpecialBudget.tsx";
import { appRoutes } from "./shared/routes.ts";
import { SpecialBudgetForm } from "./views/SpecialBudgetForm.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<App />}
            children={[
              <Route path={appRoutes.dashboard} element={<Dashboard />} />,
              <Route path={appRoutes.pendencies.index} element={<Orders title="Atendimentos Pendentes" onlyPendency />} />,
              <Route path={appRoutes.budget.index} element={<SpecialBudget />} />,
              <Route path={appRoutes.budget.create} element={<SpecialBudgetForm />} />,
              <Route path={appRoutes.orders.index} element={<Orders title="Histórico de Solicitações" />} />,
              <Route path={appRoutes.orders.create} element={<FormOrder />} />,
              <Route path={appRoutes.orders.edit()} element={<FormOrder />} />,
            ]}
          />
        </Routes>
      </BrowserRouter>
    </OrderProvider>
  </React.StrictMode>
);
