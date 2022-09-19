import React, { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import Close from "../../assets/Close.svg";
import Entrada from "../../assets/Entradas.svg";
import Saída from "../../assets/Saídas.svg";
import { api } from "../../services/api";

interface Modal {
  isOpen: any;
  onRequestClose: any;
}

export function NewTransactionModal(props: Modal) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post("/transactions", data);
  } //Evento padrão de recarregar página do HTML (event)

  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button type="button" onClick={props.onRequestClose}>
          <img src={Close} alt="Fechar" />
        </button>

        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Preço"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))} //event.target.value retorna sempre uma string! como tipamos como um number, precisamos converter
        />

        <TransactionTypeContainer>
          <RadioBox
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"} //Essa propriedade poderia receber qualquer nome, é característica do styled components
            activeColor="green"
          >
            <img src={Entrada} alt="Entrada" />
            <h4>Entrada</h4>
          </RadioBox>

          <RadioBox
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={Saída} alt="Saída" />
            <h4>Saída</h4>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
