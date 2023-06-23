import { useSelector, useDispatch } from "react-redux";
import { TasksList, Item, Content, Button } from "./styled";
import { Link } from "react-router-dom";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../../tasksSlice";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <TasksList>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button onClick={() => dispatch(toggleTaskDone(task.id))} toggleDone>
            {task.done ? "✓" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/tasks/${task.id}`}>{task.content}</Link>
          </Content>
          <Button onClick={() => dispatch(removeTask(task.id))} remove>
            🗑
          </Button>
        </Item>
      ))}
    </TasksList>
  );
};
export default TaskList;
