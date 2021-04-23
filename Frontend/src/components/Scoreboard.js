import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <table>
      <tbody>
        <tr>
          <th>name</th>
          <th>score</th>
          <th>date</th>
        </tr>
        {scores.map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.player}</td>
              <td>{user.score}</td>
              <td>{user.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Scoreboard;
