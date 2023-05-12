import React, { useState } from "react";
import { StyledForm, StyledInput, StyledButton } from "./StyledForm";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();

    if (!contentTrimmed) {
      return;
    }

    addNewTask(contentTrimmed);
    setNewTaskContent("");
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        value={newTaskContent}
        name="task"
        placeholder="New task"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <StyledButton>Add task</StyledButton>
    </StyledForm>)

}

export default Form;
