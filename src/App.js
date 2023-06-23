import { HashRouter, NavLink, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

const App = () => (
  <HashRouter>
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/author">About author</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/author">
            <Author />
          </Route>
          <Route path="/tasks">
            <Tasks />
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
