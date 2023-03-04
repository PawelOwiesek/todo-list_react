import "./form.css";

const Form = () => (
  <form className="form">
    <input
      className="form__input "
      autofocus
      name="task"
      placeholder="New task"
    />
    <button className="form__button ">Add task</button>
  </form>
);

export default Form;
