import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { eraseCookie, readCookie } from "../utils/cookies";

function Navbar({ setUser, user }) {
  function logout() {
    axios
      .post("/users/logout", "body", {
        headers: { authorization: "Bearer " + readCookie("accessToken") },
      })
      .then((data) => {
        eraseCookie("accessToken");
        eraseCookie("refreshToken");
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
        {user !== "guest" ? (
          <Link to="/">
            <h2 onClick={() => logout()}>Logout</h2>
          </Link>
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
