import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration-line: none;
  color: white;
  border-bottom: 2px solid 008080;
  &.active {
    color: fff;
    font-weight: bold;
  }
  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  background-color: #008080;
  font-size: 22px;
  letter-spacing: 3px;
  list-style-type: none;
`;

export const Item = styled.li`
  padding: 15px 30px 0 30px;
  margin-bottom: 2px;
`;
