import React, { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import Close from "../../assets/Close.svg";
import Entrada from "../../assets/Entradas.svg";
import Saída from "../../assets/Saídas.svg";
import { useTransactions } from "../../hooks/useTransactions";

interface Modal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: Modal) {
  // const { createTransaction } = useContext(TransactionsContext);
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    onRequestClose(); //Isso só deve ocorrer quando a transaction for adicionada, primeiro temos que transformar em uma função async e adicionar um await na função, dizendo para esperar a gravação na api
  }
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <button type="button" onClick={onRequestClose}>
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
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))} //event.target.value retorna sempre uma string! como tipamos como um number, precisamos converter
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
