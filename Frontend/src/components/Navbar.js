import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { eraseCookie, readCookie } from "../utils/cookies";

function Navbar({ setUser, user }) {
  function logout() {
    axios
      .post("/users/logout", "body", {
        headers: {
          authorization: "Bearer " + readCookie("accessToken"),
          refreshToken: readCookie("refreshToken"),
        },
      })
      .then(() => {
        eraseCookie("accessToken");
        eraseCookie("refreshToken");
        setUser("guest");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="navbar">
      <nav className="nav-items">
        <NavLink className="nav-links" to="/" exact activeClassName="active">
          <h2>Home-Page</h2>
        </NavLink>
        <NavLink
          className="nav-links"
          to="/scoreboard"
          activeClassName="active"
        >
          <h2>Scoreboard</h2>
        </NavLink>
        {user !== "guest" ? (
          <NavLink
            className="nav-links"
            exact
            to="/"
            activeClassName="inactive"
          >
            <h2 onClick={() => logout()}>Logout</h2>
          </NavLink>
        ) : (
          <>
            <NavLink className="nav-links" to="/login" activeClassName="active">
              <h2>Login</h2>
            </NavLink>
            <NavLink
              className="nav-links"
              to="/register"
              activeClassName="active"
            >
              <h2>Register</h2>
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
