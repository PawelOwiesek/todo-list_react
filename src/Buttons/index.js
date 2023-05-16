import { StyledButton, Container } from "./StyledButtons";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Container>
    {tasks.length > 0 && (
      <>
        <StyledButton onClick={toggleHideDone}>
          {hideDone ? " Show" : " Hide"}
          Done Tasks
        </StyledButton>
        <StyledButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Mark All Tasks As Done
        </StyledButton>
      </>
    )}
  </Container>
);

export default Buttons;
