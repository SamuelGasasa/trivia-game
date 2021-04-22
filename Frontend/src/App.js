import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Question from "./components/Question";
import QuestionPage from "./components/QuestionPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/question" component={QuestionPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
