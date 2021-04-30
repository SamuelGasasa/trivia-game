import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { eraseCookie, readCookie } from "../utils/cookies";
import "../styles/NavBar.css";

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
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="navbar">
      <h1 id="nav-header">Navbar</h1>
      <nav className="nav-items">
        <Link className="nav-links" to="/">
          <h2>Home-Page</h2>
        </Link>
        <Link className="nav-links" to="/scoreboard">
          <h2>Scoreboard</h2>
        </Link>
        {user !== "guest" ? (
          <Link className="nav-links" to="/">
            <h2 onClick={() => logout()}>Logout</h2>
          </Link>
        ) : (
          <>
            <Link className="nav-links" to="/login">
              <h2>Login</h2>
            </Link>
            <Link className="nav-links" to="/register">
              <h2>Register</h2>
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
