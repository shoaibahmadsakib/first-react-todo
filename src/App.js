import "./App.css";
import StatingPage from "./Components/Pages/StartingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Form/Login'
import SignUp from './Components/Form/SignUp'
import Homepage from './Components/Pages/Homepage'
import About from "./Components/Pages/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={StatingPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/Homepage" component={Homepage} />
          <Route exact path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
