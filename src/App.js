import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zjesc obiad", done: true },
  { id: 2, content: "zrobic zadanie domowe", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header title="To do list" />
      <Section title="Add new task" body={<Form />} />
      <Section
        title="Tasks to be completed:"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>
  );
}

export default App;
