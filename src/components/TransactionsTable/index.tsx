import React, { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));

    // fetch("http://localhost:3000/api/transactions")
    //   .then((response) => response.json()) //Transforma a resposta em um json
    //   .then((data) => console.log(data));
  }, []); //Array vazio, executa uma única vez a busca

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>25/08/22</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$ 1.000,00</td>
            <td>Casa</td>
            <td>25/08/22</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>25/08/22</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
