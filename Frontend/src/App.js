import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Scoreboard from "./components/Scoreboard";
import QuestionPage from "./components/QuestionPage";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { getHttp } from "./utils/networkWrapper";
import "./styles/app.css";
function App() {
  const [user, setUser] = useState("guest");

  useEffect(() => {
    getHttp("/information/user", "accessToken").then((res) => {
      setUser(res.data.username);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
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
