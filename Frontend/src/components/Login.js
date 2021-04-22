import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="login-page">
      <h1>LOG-IN</h1>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="name"
        />
        <submit>log-in</submit>
      </form>
    </div>
  );
}

export default Login;
