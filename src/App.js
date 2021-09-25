import "./App.css";
import Pressupost from "./components/Pressupost.jsx";
import Welcome from "./components/Welcome.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route exact to="/pressupost">
        <Pressupost />
      </Route>
    </Switch>
  </Router>;
}

export default App;
