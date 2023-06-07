import { useSelector, useDispatch } from "react-redux";
import { StyledButton, Container } from "./StyledButtons";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Container>
      {tasks.length > 0 && (
        <>
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
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
};

export default Buttons;
