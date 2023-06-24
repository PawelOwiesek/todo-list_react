import styled, { css } from "styled-components";

export const Span = styled.span`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.teal};
  ${({ negative }) =>
    negative &&
    css`
      color: ${({ theme }) => theme.colors.crimson};
    `}
`;
