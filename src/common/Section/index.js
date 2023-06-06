import { Header, SectionBody, SectionTitle, Wrapper } from "./StyledSection";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </Header>
    <SectionBody>{body}</SectionBody>
  </Wrapper>
);
export default Section;
