import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ user }) {
  return (
    <div>
      <h1>HELLO {user}</h1>
    </div>
  );
}

export default Home;
