import { ReactNode } from "react";
import { Header, SectionBody, SectionTitle, Wrapper } from "./StyledSection";

interface SectionProps {
  title: ReactNode;
  body: ReactNode;
  extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: SectionProps) => (
  <Wrapper>
    <Header>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </Header>
    <SectionBody>{body}</SectionBody>
  </Wrapper>
);
export default Section;
