import "./App.css";
import Pressupost from "./components/Pressupost.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {
  return <Switch>
    <Route to="initial">

    </Route>
    <Route to="pressupost">
      <Pressupost />
    </Route>
  </Switch>
}

export default App;
