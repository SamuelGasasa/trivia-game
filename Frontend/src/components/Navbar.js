import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Navbar({
  setRefreshToken,
  setAccessToken,
  setUser,
  user,
  accessToken,
}) {
  function logout() {
    axios
      .post("/users/logout", "body", {
        headers: { authorization: "Bearer " + accessToken },
      })
      .then((data) => {
        setAccessToken("");
        setRefreshToken("");
        setUser("guest");
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <nav className="nav-items">
        <Link to="/">
          <h2>Home Page</h2>
        </Link>
        <Link to="/scoreboard">
          <h2>Scoreboard</h2>
        </Link>
        {user ? (
          <h2 onClick={() => logout()}>Logout</h2>
        ) : (
          <>
            <Link to="/login">
              <h2>Login</h2>
            </Link>
            <Link to="/register">
              <h2>Register</h2>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
