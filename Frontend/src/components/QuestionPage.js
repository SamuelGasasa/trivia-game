import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import Answer from "./Answer";
import "../styles/QuestionPage.css";

function QuestionPage() {
  const [counter, setCounter] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [points, setPoints] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3001/question/generate").then((allData) => {
      setQuestion(allData.data.question);
      setAnswers(allData.data.answers);
    });
  }, [counter]);

  return (
    <div className="question-page">
      <h1 id="header">Question {counter}</h1>
      <div>points: {points}</div>
      <Question question={question} />
      <div id="answer-container">
        {answers.map((answer, i) => {
          return (
            <Answer
              key={i}
              answer={answer}
              counter={counter}
              setCounter={setCounter}
              points={points}
              setPoints={setPoints}
            />
          );
        })}
      </div>
    </div>
  );
}

export default QuestionPage;
