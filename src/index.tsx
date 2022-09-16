import React from "react";
import ReactDOM from "react-dom/client";
import { createServer } from "miragejs";
import App from "./App";

createServer({
  routes() {
    this.namespace = "api"; //fetch("http://localhost:3000/api/transactions") a partir de api****, todas AS ROTAS SERÃO DIRECIONADAS PARA O MIRAGE

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: "deposit",
          category: "Job",
          createdAt: new Date(),
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
