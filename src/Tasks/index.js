import "./list.css";

const Tasks = (props) => (
  <ul className="list">
    {props.tasks.map((task) => (
      <li
        className={`list__item ${
          task.done && props.hideDoneTask ? "list__item--hidden" : ""
        }`}
        key={task.id}
      >
        <button className="list__button list__button--toggleDone">
          {task.done ? "✓" : ""}
        </button>
        <span
          className={` "list__item${
            task.done ? "list__item list__item--done" : "list__item"
          }`}
        >
          {task.content}
        </span>
        <button className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);
export default Tasks;
