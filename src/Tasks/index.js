import "./list.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__item ${task.done && hideDone ? "list__item--hidden" : ""
          }`}

      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className="list__button list__button--toggleDone">
          {task.done ? "✓" : ""}
        </button>
        <span
          className={` "list__item ${task.done ? "list__item list__item--done" : "list__item"
            }`}
        >
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="list__button list__button--remove">🗑</button>
      </li>
    ))}
  </ul>
);
export default Tasks;
