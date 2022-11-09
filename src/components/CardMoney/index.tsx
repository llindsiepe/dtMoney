import { Container, MoneyIn, Title, MoneyOut, TitleOut } from "./styles";

interface Money {
  img: any;
  title: string;
  price: any;
  highlight?: boolean;
}

export function CardMoney(props: Money) {
  return (
    <Container>
      {props.highlight ? (
        <MoneyOut>
          <TitleOut>
            <h5>{props.title}</h5>
            <img src={props.img} width="25rem" />
          </TitleOut>
          <h2>R${props.price}</h2>
        </MoneyOut>
      ) : (
        <>
          <MoneyIn>
            <Title>
              <h5>{props.title}</h5>
              <img src={props.img} width="25rem" />
            </Title>
            <h2>R${props.price}</h2>
          </MoneyIn>
        </>
      )}
    </Container>
  );
}
