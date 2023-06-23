import styled, { css } from "styled-components";

export const Span = styled.span`
  font-size: 25px;
  color: #008080;
  ${({ negative }) =>
    negative &&
    css`
      color: red;
    `}
`;
