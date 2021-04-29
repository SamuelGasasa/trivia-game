import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Scoreboard from "./components/Scoreboard";
import QuestionPage from "./components/QuestionPage";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { getHttp } from "./utils/networkWrapper";

function App() {
  const [user, setUser] = useState("guest");
  const [refreshToken, setRefreshToken] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    getHttp("/information/user", "accessToken").then((res) => {
      setUser(res.data.username);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar
          refreshToken={refreshToken}
          accessToken={accessToken}
          setRefreshToken={setRefreshToken}
          setAccessToken={setAccessToken}
          setUser={setUser}
        />
        <Switch>
          <Route exact path="/">
            <Home user={user} />
          </Route>
          <Route exact path="/login">
            <Login
              setRefreshToken={setRefreshToken}
              setAccessToken={setAccessToken}
              setUser={setUser}
            />
          </Route>
          <Route exact path="/quiz">
            <QuestionPage
              refreshToken={refreshToken}
              accessToken={accessToken}
            />
          </Route>
          <Route exact path="/scoreboard" component={Scoreboard} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
