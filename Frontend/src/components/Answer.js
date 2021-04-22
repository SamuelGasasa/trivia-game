import React from "react";
// import axios from "axios";

function Answer(props) {
  const handleClick = (selectedAnswer) => {
    if (selectedAnswer.right) {
      props.setPoints(props.points + 100);
    }
    props.setCounter(props.counter + 1);
  };

  return (
    <button
      className="answer"
      onClick={() => {
        handleClick(props.answer);
      }}
    >
      {props.answer.country}
    </button>
  );
}

export default Answer;
