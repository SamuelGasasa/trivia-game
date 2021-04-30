import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");
  const history = useHistory();
  const handleSubmit = () => {
    axios
      .post("/users/register", { username, password })
      .then(() => {
        console.log("user registered");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        const status = err.message.slice(-3);
        if (status === "400") setError("Invalid username or password");
        else setError("User already exists");
      });
  };
  return (
    <div className="register-page">
      <h1 id="form-headline">Register</h1>
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
        Register
      </button>
      <h1 className="error-text">{err}</h1>
    </div>
  );
}

export default Register;
