import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home({ user }) {
  return (
    <div id="home-page">
      <h1 id="header">HELLO {user}</h1>
      {user === "guest" ? (
        <div id="links">
          <Link className="link" exact="true" to="/login">
            login
          </Link>
          <p id="register-question">haven't registered?</p>
          <Link className="link" exact="true" to="/register">
            register now
          </Link>
        </div>
      ) : (
        <Link exact="true" to="/quiz">
          Let's start
        </Link>
      )}
    </div>
  );
}

export default Home;
