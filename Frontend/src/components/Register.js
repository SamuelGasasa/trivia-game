import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = () => {
    axios
      .post("/users/register", { username, password })
      .then(() => {
        console.log("user registered");
        history.push("/login");
      })
      .catch((err) => console.log(err.message.slice(-3)));
  };
  return (
    <div className="register-page">
      <h1 id="form-headline">Register</h1>
      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        id="username"
        placeholder="Enter your username"
      />
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <button id="submit" onClick={() => handleSubmit()}>
        Register
      </button>
    </div>
  );
}

export default Register;
