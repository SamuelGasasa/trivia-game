import React, { useState } from "react";

function Answer(props) {
  const [answerTime, setAnswerTime] = useState(0);
  setInterval(() => {
    setAnswerTime(answerTime + 1);
  }, 1000);
  const newPoints = Math.round((1 - answerTime / 20000) * 70 + 30) + 1;

  return (
    <button
      className="answer"
      onClick={() => {
        props.handleClick(props.answer);
      }}
    >
      {props.answer.answer}
    </button>
  );
}

export default Answer;
