import { StyledButton } from "../Buttons/StyledButtons";
import { fetchExampleTasks, fetchingStatus } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoadingParagraph } from "./styled";
import { useState, useEffect } from "react";

const SampleTaskButton = () => {
  const [red, setRed] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(fetchingStatus);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setRed((red) => !red);
    }, 500);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <StyledButton
      onClick={() => dispatch(fetchExampleTasks())}
      disabled={loading}
    >
      {loading ? (
        <LoadingParagraph red={red}>Loading...</LoadingParagraph>
      ) : (
        <LoadingParagraph>Download sample tasks.</LoadingParagraph>
      )}
    </StyledButton>
  );
};

export default SampleTaskButton;
