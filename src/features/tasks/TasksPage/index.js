import Form from "../TasksPage/Form";
import TasksList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import SampleTaskButton from "./SampleTasksButton";
import Search from "./Search";

function TasksPage() {
  return (
    <Container>
      <Header title="To do list" />
      <Section
        title="Add new task"
        body={<Form />}
        extraHeaderContent={<SampleTaskButton />}
      />
      <Section title="Search" body={<Search />} />
      <Section
        title="Tasks to be completed:"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
