import { StyledButton } from "../Button";
import { fetchExampleTasks, fetchingisLoading } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";

const SampleTaskButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(fetchingisLoading);

  return (
    <StyledButton
      onClick={() => dispatch(fetchExampleTasks())}
      disabled={loading}
    >
      {loading ? "Loading..." : "Download sample tasks"}
    </StyledButton>
  );
};

export default SampleTaskButton;
