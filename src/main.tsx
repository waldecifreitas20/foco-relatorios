import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./views/Dashboard.tsx";
import { PendencyView } from "./views/Pendency.tsx";
import { SolicitationView } from "./views/Solicitation.tsx";
import { NewSolicitationView } from "./views/NewSolicitationView.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={<App />}
        children={[
          <Route path="/" element={<Dashboard/>}/>,
          <Route path="/pendencias" element={<PendencyView/>}/>,
          <Route path="/solicitacoes" element={<SolicitationView/>}/>,
          <Route path="/nova-solicitacao" element={<NewSolicitationView/>}/>
        ]}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
