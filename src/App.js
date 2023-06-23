import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink } from "./styled";

const App = () => (
  <HashRouter>
    <div>
      <nav>
        <ul>
          <li>
            <StyledNavLink to="/tasks">Tasks</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/author">About author</StyledNavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/tasks/:id">
            <TaskPage />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/author">
            <AuthorPage />
          </Route>

          <Route path="/">
            <Redirect to="/tasks" />
          </Route>
        </Switch>
      </nav>
    </div>
  </HashRouter>
);
export default App;
