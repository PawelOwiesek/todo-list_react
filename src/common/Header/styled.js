import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2em;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 1em;
  }
`;
