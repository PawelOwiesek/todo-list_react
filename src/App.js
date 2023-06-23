import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import { Author } from "./features/author/Author";
const App = () => (
  <HashRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/author">About author</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/author">
            <Author />
          </Route>
          <Route exactpath="/tasks">
            <Tasks />
          </Route>
        </Switch>
      </nav>
    </div>
  </HashRouter>
);
export default App;
