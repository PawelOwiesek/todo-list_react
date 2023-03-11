import React, { useState } from "react";
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




function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);

  };
  return (
    <Container>
      <Header title="To do list" />
      <Section title="Add new task" body={<Form />} />
      <Section
        title="Tasks to be completed:"
        body={<Tasks
          tasks={tasks}
          hideDone={hideDone}
        />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
