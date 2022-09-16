import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const HeaderT = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: "flex";
  justify-content: space-between;
  padding: 0 1rem 10rem;
  padding-top: 3rem;

  button {
    font-size: 1rem;
    color: white;
    background: var(--blue-light);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;

    transition: filter 0.2s; //toda vez que houver alteração no button ele fará uma transição.

    &:hover {
      filter: brightness(
        0.9
      ); //Muda a cor do botão quando  o mouse passa por ele.
    }
  }
`;
