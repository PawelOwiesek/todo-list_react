import { ReactNode } from "react";
import { Title } from "./styled";

interface HeaderProps {
  title: ReactNode;
}
const Header = ({ title }: HeaderProps) => (
  <header>
    <Title>{title}</Title>
  </header>
);
export default Header;
