import styled from "styled-components";

export const Container = styled.main`
  @media (max-width: 720px) {
    margin-bottom: 1rem;
  }
`;

export const MoneyIn = styled.div`
  width: 15rem;
  background-color: white;
  padding: 1.5rem;
  border-radius: 5px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MoneyOut = styled.div`
  width: 15rem;
  background-color: #33cc95;
  padding: 1.5rem;
  color: white;
`;

export const TitleOut = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;
