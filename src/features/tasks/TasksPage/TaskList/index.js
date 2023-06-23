import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { TasksList, Item, Content, Button } from "./styled";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("search");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
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
