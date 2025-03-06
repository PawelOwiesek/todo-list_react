import { ReactElement } from "react";
import { Wrapper } from "./Wrapper";

interface ContainerProps {
  children: ReactElement;
}

const Container = (props: ContainerProps) => (
  <Wrapper>{props.children}</Wrapper>
);
export default Container;
