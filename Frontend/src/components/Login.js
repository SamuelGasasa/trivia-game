import React, { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "../styles/Login.css";

function Login(props) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    props.setUser(name);
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
      <Link exact="true" to="/quiz">
        <button id="submit" onClick={() => handleSubmit()}>
          Log-in
        </button>
      </Link>
    </div>
  );
}

export default Login;
