import React, { useState } from "react";
// import axios from "axios";
import "../styles/Login.css";

function Login() {
  const [name, setName] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="login-page">
      <h1 id="form-headline">LOG-IN</h1>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="name"
          placeholder="Enter your name"
        />
        <input id="submit" type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Login;
