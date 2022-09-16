import { Container, Cards } from "./styles";
import Entradas from "../../assets/Entradas.svg";
import Saídas from "../../assets/Saídas.svg";
import Total from "../../assets/Total.svg";

import { GlobalStyle } from "../../styles/global";
import { CardMoney } from "../CardMoney";

export function Summary() {
  return (
    <>
      <Container>
        <Cards>
          <CardMoney img={Entradas} title="Entradas" price="R$ 17.500,00" />
          <CardMoney img={Saídas} title="Saídas" price="R$ 1.259,00" />
          <CardMoney
            img={Total}
            title="Total"
            price="R$ 16.141,00"
            highlight={true}
          />
        </Cards>
      </Container>
      <GlobalStyle />
    </>
  );
}
