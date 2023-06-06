import { TasksList, Item, Content, Button } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <TasksList>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button onClick={() => toggleTaskDone(task.id)} toggleDone>
          {task.done ? "✓" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button onClick={() => removeTask(task.id)} remove>
          🗑
        </Button>
      </Item>
    ))}
  </TasksList>
);
export default TaskList;
