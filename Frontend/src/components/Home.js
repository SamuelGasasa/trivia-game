import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home({ user }) {
  const [score, setScore] = useState();
  useEffect(() => {
    axios.get(`/scoreboard/${user}`).then((res) => {
      if (res) {
        setScore(res.data);
      }
    });
  }, [user]);

  return (
    <div id="home-page" className="page">
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
        <div className="home-info">
          <Link exact="true" to="/quiz" className="start-link">
            {"> Let's start <"}
          </Link>
          <h1>your highest score is: {score ? score : 0}</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
