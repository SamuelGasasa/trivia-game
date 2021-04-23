import React, { useContext } from "react";
import { Redirect } from "react-router";

function Answer(props) {
  const handleClick = (selectedAnswer) => {
    if (
      selectedAnswer.right ||
      String(selectedAnswer.right) === selectedAnswer.answer
    ) {
      props.setPoints(props.points + 100);
    } else {
      props.setLives(props.lives - 1);
    }
    props.setAnswered(true);
    if (!props.answered) {
      setTimeout(() => {
        props.setCounter(props.counter + 1);
        props.setAnswered(false);
      }, 6000);
      console.log("false");
    }
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
