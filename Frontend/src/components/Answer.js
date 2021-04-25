import React from "react";

function Answer({ answer, handleClick }) {
  return (
    <button
      className="answer"
      onClick={() => {
        handleClick(answer);
      }}
    >
      {answer.answer}
    </button>
  );
}

export default Answer;
