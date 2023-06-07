import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, StyledInput, StyledButton } from "./StyledForm";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();

    if (!contentTrimmed) {
      return;
    }

    dispatch(
      addTask({
        content: contentTrimmed,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    focusInput();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        value={newTaskContent}
        name="task"
        placeholder="New task"
        onChange={({ target }) => setNewTaskContent(target.value)}
        ref={inputRef}
        autoFocus
      />
      <StyledButton>Add task</StyledButton>
    </StyledForm>
  );
};

export default Form;
