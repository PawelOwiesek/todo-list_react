import React, { useState } from "react";
import "./form.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  }
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        className="form__input "
        name="task"
        placeholder="New task"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button ">Add task</button>
    </form>)

}

export default Form;
