import React, { useState } from "react";

import Logotipo from "../../assets/Logo.svg";

import { Container, HeaderT } from "./styles";

interface HeaderProps {
  handleOpenNewTransactionModal: any;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <HeaderT style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={Logotipo} alt="dtmoney" />
        <button type="button" onClick={props.handleOpenNewTransactionModal}>
          Nova transação
        </button>
      </HeaderT>
    </Container>
  );
}
