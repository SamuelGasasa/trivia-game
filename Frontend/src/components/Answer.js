import React, { useState } from "react";

function Answer(props) {
  const [answerTime, setAnswerTime] = useState(0);
  setInterval(() => {
    setAnswerTime(answerTime + 1);
  }, 1000);
  const newPoints = Math.round((1 - answerTime / 20000) * 70 + 30) + 1;

  const handleClick = (selectedAnswer) => {
    if (
      selectedAnswer.right ||
      String(selectedAnswer.right) === selectedAnswer.answer
    ) {
      props.setPoints(props.points + newPoints);
    } else {
      props.setLives(props.lives - 1);
    }
    props.setAnswered(true);
    if (!props.answered) {
      setTimeout(() => {
        props.answered || props.setCounter(props.counter + 1);
        props.setAnswered(false);
      }, 3000);
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
