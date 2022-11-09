import { Container, Cards } from "./styles";
import Entradas from "../../assets/Entradas.svg";
import Saídas from "../../assets/Saídas.svg";
import Total from "../../assets/Total.svg";

import { GlobalStyle } from "../../styles/global";
import { CardMoney } from "../CardMoney";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const totalDeposits = transactions.reduce((acc, transaction) => {
    if (transaction.type === "deposit") {
      return acc + transaction.amount;
    }

    return acc;
  }, 0);

  const totalWithdraw = transactions.reduce((acc, transaction) => {
    if (transaction.type === "withdraw") {
      return acc + transaction.amount;
    }

    return acc;
  }, 0);

  const totalMoney = transactions.reduce((acc, transaction) => {
    return totalDeposits - totalWithdraw;
  }, 0);

  return (
    <>
      <Container>
        <Cards>
          <CardMoney img={Entradas} title="Entradas" price={totalDeposits} />
          <CardMoney img={Saídas} title="Saídas" price={totalWithdraw} />
          <CardMoney
            img={Total}
            title="Total"
            price={totalMoney}
            highlight={true}
          />
        </Cards>
      </Container>
      <GlobalStyle />
    </>
  );
}
