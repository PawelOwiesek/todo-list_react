import React, { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./StyledForm";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();

    if (!contentTrimmed) {
      return;
    }

    addNewTask(contentTrimmed);
    setNewTaskContent("");
    focusInput();
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        value={newTaskContent}
        name="task"
        placeholder="New task"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
      />
      <StyledButton>Add task</StyledButton>
    </StyledForm>)

}

export default Form;
