import axios from "axios";
import React from "react";

function RatingPage({ setAnswered, counter, setCounter, sendRate }) {
  const dontSaveRate = () => {
    setAnswered(false);
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1 id="questionHeader">would you like to rate this question?</h1>
      <button
        className="rating-button"
        onClick={() => {
          dontSaveRate();
        }}
      >
        no
      </button>
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
