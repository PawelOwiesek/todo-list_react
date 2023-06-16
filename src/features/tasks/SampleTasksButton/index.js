import { StyledButton } from "../Buttons/StyledButtons";
import { fetchExampleTasks } from "../tasksSlice";
import { useDispatch } from "react-redux";

const SampleTaskButton = () => {
  const dispatch = useDispatch();

  return (
    <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
      Download sample tasks.
    </StyledButton>
  );
};

export default SampleTaskButton;
