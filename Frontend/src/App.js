import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Scoreboard from "./components/Scoreboard";
import QuestionPage from "./components/QuestionPage";
import { useState } from "react";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState("");
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route exact path="/quiz">
            <QuestionPage user={user} />
          </Route>
          <Route exact path="/scoreboard" component={Scoreboard} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
