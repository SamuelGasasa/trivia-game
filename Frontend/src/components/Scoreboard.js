import React, { useEffect } from "react";
// import axios from "axios";

function Scoreboard() {
  const table = [
    { name: "Omer", score: 200, createdAt: "22-04-2020" },
    { name: "Yuval", score: 500, createdAt: "21-04-2020" },
    { name: "Oren", score: 300, createdAt: "23-04-2020" },
  ];

  useEffect(() => {
    //add axios to get scoreboard
  });
  return (
    <table>
      <tr>
        <th>name</th>
        <th>score</th>
        <th>date</th>
      </tr>
      {table.map((user) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.score}</td>
            <td>{user.createdAt}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Scoreboard;
