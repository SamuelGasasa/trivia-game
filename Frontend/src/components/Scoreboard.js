import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Scoreboard.css";

function Scoreboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("/scoreboard").then(
      (data) => {
        setScores(data.data);
      },
      [scores]
    );
  });
  return (
    <div id="scoreboard">
      <table id="table">
        <tbody>
          <tr id="table-head">
            <th>name</th>
            <th>score</th>
            <th>date</th>
          </tr>
          {scores.map((user, i) => {
            return (
              <tr key={i} className="table-row">
                <td className="names">{user.player}</td>
                <td className="scores">{user.score}</td>
                <td className="dates">{user.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link exact="true" to="/" id="redirect">
        Try Again
      </Link>
    </div>
  );
}

export default Scoreboard;
