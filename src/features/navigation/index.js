import { Item, List, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to="/tasks">Tasks</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/author">About author</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};

export default Navigation;
