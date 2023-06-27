import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.teal};
  background: none;
  border: none;
  transition: 0.5s;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 0;
  }
`;
