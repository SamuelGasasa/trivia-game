import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "../styles/Login.css";

function Login() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    //need to add axios to leader board
  };

  return (
    <div className="login-page">
      <h1 id="form-headline">LOG-IN</h1>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="name"
        placeholder="Enter your name"
      />
      <Link exact="true" to="/question">
        <button id="submit" onClick={() => handleSubmit()}>
          Log-in
        </button>
      </Link>
    </div>
  );
}

export default Login;
