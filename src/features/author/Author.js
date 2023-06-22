import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export const Author = () => (
  <Container>
    <Header title="About author" />
    <Section
      title="Pawel Owiesek"
      body={
        <>
          <p>
            <strong>Hello there!🙋‍♂️</strong>
          </p>{" "}
          I'm a 41-year-old living in the Netherlands for the past 13 years. My
          interests revolve around music🎶, environmental protection 🏞, and
          keeping up with the latest technological innovations⚙. As far back as
          I can remember, I've always been drawn to the field of computer
          science. That's why I decided to pursue my dreams and become a
          front-end developer.
          <strong>
            I thoroughly enjoy learning new things, and the vast world of
            programming provides me with endless opportunities for growth. It's
            safe to say that I'll have plenty to keep me occupied for the years
            to come!🤞
          </strong>
        </>
      }
    />
  </Container>
);
