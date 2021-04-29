import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ user }) {
  return (
    <div>
      <h1>HELLO {user}</h1>
      {user === "guest" ? (
        <>
          <Link exact="true" to="/login">
            login
          </Link>
          <div>haven't register?</div>
          <Link exact="true" to="/register">
            register now
          </Link>
        </>
      ) : (
        <Link exact="true" to="/quiz">
          Let's start
        </Link>
      )}
    </div>
  );
}

export default Home;
