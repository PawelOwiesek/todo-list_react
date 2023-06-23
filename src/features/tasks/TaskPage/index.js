import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header title="Details of task" />
      <Section
        title={task ? task.content : "no matching tasks🙈"}
        body={
          task && (
            <>
              <strong>Task done:</strong> {task.done ? "Yes👌" : "No🤷‍♂️"}
            </>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;
