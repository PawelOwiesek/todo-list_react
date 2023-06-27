import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration-line: none;
  color: ${({ theme }) => theme.colors.white};
  &.active {
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
  }
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.teal};
  font-size: 22px;
  letter-spacing: 3px;
  list-style-type: none;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const Item = styled.li`
  padding: 15px 30px 15px 30px;
  margin-bottom: 3px;
`;
