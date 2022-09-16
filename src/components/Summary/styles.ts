import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  margin-top: -8rem;
`;

export const Cards = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 720px) {
    display: inline-block;
  }
`;
