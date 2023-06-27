import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Tasks from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./common/Navigation";

const App = () => (
  <Router>
    <>
      <Navigation />
      <Switch>
        <Route path="/tasks/:id" component={TaskPage} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/author" component={AuthorPage} />
        <Route path="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </>
  </Router>
);
export default App;
