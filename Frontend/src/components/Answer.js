import React, { useState } from "react";

function Answer(props) {
  setInterval(() => {
    props.setAnswerTime(props.answerTime + 1);
  }, 1000);
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
