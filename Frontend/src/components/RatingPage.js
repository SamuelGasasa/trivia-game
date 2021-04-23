import React from "react";

function RatingPage(props) {
  const sendRate = () => {
    props.setAnswered(false);
  };
  return (
    <div>
      <h1 id="questionHeader">would you like to rate this question?</h1>
      <button className="rating-button">no</button>
      <div id="rating-stars">
        <p id="1" onClick={() => sendRate()}>
          ⭐
        </p>
        <p id="2" onClick={() => sendRate()}>
          ⭐
        </p>
        <p id="3" onClick={() => sendRate()}>
          ⭐
        </p>
        <p id="4" onClick={() => sendRate()}>
          ⭐
        </p>
        <p id="5" onClick={() => sendRate()}>
          ⭐
        </p>
      </div>
    </div>
  );
}

export default RatingPage;
