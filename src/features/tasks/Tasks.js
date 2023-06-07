import { useTasks } from "../../useTasks";
import Form from "./Form";
import TasksList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  const { removeTask, setAllDone } = useTasks();

  return (
    <Container>
      <Header title="To do list" />
      <Section title="Add new task" body={<Form />} />
      <Section
        title="Tasks to be completed:"
        body={<TasksList removeTask={removeTask} />}
        extraHeaderContent={<Buttons setAllDone={setAllDone} />}
      />
    </Container>
  );
}

export default Tasks;
