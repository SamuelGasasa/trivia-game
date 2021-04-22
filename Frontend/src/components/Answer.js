import React from "react";
// import axios from "axios";

function Answer(props) {
  const handleClick = () => {
    // axios.post("/", props.answer).then(() => {
    //   props.changeCounter(props.counter + 1);
    // });
  };

  return (
    <button
      className="answer"
      onClick={() => {
        handleClick();
      }}
    >
      {props.answer}
    </button>
  );
}

export default Answer;
