import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Login.css";
import { createCookie } from "../utils/cookies";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    axios
      .post("/users/login", { username, password })
      .then((data) => {
        console.log("Login successfully");
        setUser(username);
        history.push("/");
        createCookie("refreshToken", data.data.refreshToken);
        createCookie("accessToken", data.data.accessToken, 1);
      })
      .catch((err) => console.log(err.message.slice(-3)));
  };

  return (
    <div className="login-page">
      <h1 id="form-headline">LOG-IN</h1>
      <input
        className="input"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        id="username"
        placeholder="Enter your username"
      />
      <input
        className="input"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <button id="submit" onClick={() => handleSubmit()}>
        Log-in
      </button>
    </div>
  );
}

export default Login;
