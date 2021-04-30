import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Scoreboard from "./components/Scoreboard";
import QuestionPage from "./components/QuestionPage";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { getHttp, postHttp } from "./utils/networkWrapper";
import "./styles/app.css";
import axios from "axios";
import { createCookie, readCookie } from "./utils/cookies";
function App() {
  const [user, setUser] = useState("guest");

  useEffect(() => {
    getHttp("/information/user", "accessToken").then((res) => {
      setUser(res.data.username);
    });
  }, []);
  axios.interceptors.response.use(
    (response) => response,
    (err) => {
      if (err.message.slice(-3) === "403") {
        const cookie = readCookie("accessToken");
        if (!cookie)
          return axios
            .post("/users/token", {
              refreshToken: readCookie("refreshToken"),
            })
            .then((data) => {
              createCookie("accessToken", data.data.authorization, 5000);
              err.config.headers["authorization"] =
                "Bearer " + data.data.authorization;
              console.log(err.config);
              return axios.request(err.config);
            });
      }
      return Promise.reject(err);
    }
  );
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
