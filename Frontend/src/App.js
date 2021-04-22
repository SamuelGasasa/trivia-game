import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Scoreboard from "./components/Scoreboard";
import QuestionPage from "./components/QuestionPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/quiz" component={QuestionPage} />
          <Route exact path="/scoreboard" component={Scoreboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
