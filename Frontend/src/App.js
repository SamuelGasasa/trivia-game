import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Scoreboard from "./components/Scoreboard";
import QuestionPage from "./components/QuestionPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/quiz">
            <QuestionPage user={user} />
          </Route>
          <Route exact path="/scoreboard" component={Scoreboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
