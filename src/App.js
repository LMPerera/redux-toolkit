import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import User from "./components/User";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/user" />
        <Route path="/user" component={User} />
        <Route path="/post" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
