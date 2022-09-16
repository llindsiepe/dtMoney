import React, { useState } from "react";
import ReactModal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import Close from "../../assets/Close.svg";
import Entrada from "../../assets/Entradas.svg";
import Saída from "../../assets/Saídas.svg";

interface Modal {
  isOpen: any;
  onRequestClose: any;
}

export function NewTransactionModal(props: Modal) {
  const [type, setType] = useState("deposit");

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button type="button" onClick={props.onRequestClose}>
          <img src={Close} alt="Fechar" />
        </button>

        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Preço" />

        <TransactionTypeContainer>
          <RadioBox
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"} //Essa propriedade poderia receber qualquer nome, é característica do styled components
          >
            <img src={Entrada} alt="Entrada" />
            <h4>Entrada</h4>
          </RadioBox>

          <RadioBox
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
          >
            <img src={Saída} alt="Saída" />
            <h4>Saída</h4>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
