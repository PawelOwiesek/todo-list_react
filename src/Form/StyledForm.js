import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.alto};
  min-width: 100%;
`;

export const StyledButton = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  transition: background 1s, transform 1s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-height: 30px;
  }

  &:hover {
    filter: brightness(115%);
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(125%);
  }
`;
