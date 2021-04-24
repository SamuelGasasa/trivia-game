import React, { useState } from "react";

function Answer(props) {
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
