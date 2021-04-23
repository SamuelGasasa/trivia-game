import React from "react";
import "../styles/RatingPage.css";
function RatingPage({ setAnswered, counter, setCounter, sendRate }) {
  const dontSaveRate = () => {
    setAnswered(false);
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1 id="questionHeader">would you like to rate this question?</h1>

      <br />
      <div id="rating-stars">
        <p id="one" className="star" onClick={() => sendRate(1)}>
          ⭐
        </p>
        <p className="star" onClick={() => sendRate(2)}>
          ⭐
        </p>
        <p className="star" onClick={() => sendRate(3)}>
          ⭐
        </p>
        <p className="star" onClick={() => sendRate(4)}>
          ⭐
        </p>
        <p className="star" onClick={() => sendRate(5)}>
          ⭐
        </p>
      </div>
      <br />
      <button
        className="rating-button"
        onClick={() => {
          dontSaveRate();
        }}
      >
        no
      </button>
    </div>
  );
}

export default RatingPage;
