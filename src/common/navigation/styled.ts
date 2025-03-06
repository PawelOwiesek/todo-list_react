import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface ThemeProps {
  theme: {
    colors: { white: string; teal: string };
    breakpoints: {
      mobile: number;
    };
  };
}

export const StyledNavLink = styled(NavLink)`
  text-decoration-line: none;
  color: ${({ theme }: ThemeProps) => theme.colors.white};
  &.active {
    color: ${({ theme }: ThemeProps) => theme.colors.white};
    font-weight: bold;
  }
  &:hover {
    border-bottom: 2px solid ${({ theme }: ThemeProps) => theme.colors.white};
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }: ThemeProps) => theme.colors.teal};
  font-size: 22px;
  letter-spacing: 3px;
  list-style-type: none;
  margin: 0;

  @media (max-width: ${({ theme }: ThemeProps) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const Item = styled.li`
  padding: 15px 30px 15px 30px;
  margin-bottom: 3px;
`;
