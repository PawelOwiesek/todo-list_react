import styled from "styled-components";

interface ThemeProps {
  theme: {
    breakpoints: {
      mobile: number;
    };
  };
}
export const Title = styled.h1`
  font-size: 2em;
  @media (max-width: ${({ theme }: ThemeProps) => theme.breakpoints.mobile}px) {
    font-size: 1em;
  }
`;
