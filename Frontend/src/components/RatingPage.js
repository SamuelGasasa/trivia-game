import React from "react";
import "../styles/RatingPage.css";
function RatingPage({ setAnswered, counter, setCounter, sendRate, setTimer }) {
  // const dontSaveRate = () => {
  //   setAnswered(false);
  //   setCounter(counter + 1);
  //   setTimer(true);
  // };
  return (
    <div>
      <h1 id="questionHeader">would you like to rate this question?</h1>
      <br />
      <div id="rating-stars">
        <p id="one" className="star" title="1" onClick={() => sendRate(1)}>
          ⭐
        </p>
        <p id="two" className="star" title="2" onClick={() => sendRate(2)}>
          ⭐
        </p>
        <p id="three" className="star" title="3" onClick={() => sendRate(3)}>
          ⭐
        </p>
        <p id="four" className="star" title="4" onClick={() => sendRate(4)}>
          ⭐
        </p>
        <p id="five" className="star" title="5" onClick={() => sendRate(5)}>
          ⭐
        </p>
      </div>
      <br />
      <button
        className="rating-button"
        onClick={() => {
          // dontSaveRate();
          sendRate(false);
        }}
      >
        No
      </button>
    </div>
  );
}

export default RatingPage;
