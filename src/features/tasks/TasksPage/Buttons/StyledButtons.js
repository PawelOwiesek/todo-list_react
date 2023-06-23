import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.teal};
  background: none;
  border: none;
  transition: 0.5s;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.robins};
    cursor: pointer;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.silver};
    `}
`;

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
  }
`;
