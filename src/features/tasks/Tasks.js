import Form from "./Form";
import TasksList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import SampleTaskButton from "./SampleTasksButton";

function Tasks() {
  return (
    <Container>
      <Header title="To do list" />
      <Section
        title="Add new task"
        body={<Form />}
        extraHeaderContent={<SampleTaskButton />}
      />
      <Section
        title="Tasks to be completed:"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
