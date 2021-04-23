import React from "react";

function Answer(props) {
  const handleClick = (selectedAnswer) => {
    if (selectedAnswer.right) {
      props.setPoints(props.points + 100);
    } else {
      props.setLives(props.lives - 1);
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
      {props.answer.answer}
    </button>
  );
}

export default Answer;
