import { useSelector, useDispatch } from "react-redux";
import { StyledButton, Container } from "./StyledButtons";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectEveryTaskDone,
} from "../tasksSlice";

const Buttons = () => {
  const isEveryTaskDone = useSelector(selectEveryTaskDone);
  const { tasks, hideDone } = useSelector(selectTasksState);
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
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Mark All Tasks As Done
          </StyledButton>
        </>
      )}
    </Container>
  );
};

export default Buttons;
