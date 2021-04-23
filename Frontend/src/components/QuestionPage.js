import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import Answer from "./Answer";
import "../styles/QuestionPage.css";
import { Redirect } from "react-router";
import RatingPage from "./RatingPage";

function QuestionPage() {
  const [counter, setCounter] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);
  const [answered, setAnswered] = useState(false);
  useEffect(() => {
    axios.get("/question/generate").then((allData) => {
      console.log(allData.data);
      setQuestion(allData.data.question);
      setAnswers(allData.data.answers);
    });
  }, [counter]);
  const sendRate = (rating) => {
    setAnswered(false);
    setCounter(counter + 1);
    let wrongAnswers = [];
    let rightAnswer;
    answers.forEach((answer) => {
      if (answer.type !== 3) {
        if (answer.right) {
          rightAnswer = answer;
        } else {
          wrongAnswers.push(answer);
        }
      } else {
        if (answer.answer === String(answer.right)) {
          rightAnswer = answer;
        } else {
          wrongAnswers.push(answer);
          wrongAnswers[1] = { answer: null };
          wrongAnswers[2] = { answer: null };
        }
      }
    });
    console.log(rightAnswer);
    console.log(wrongAnswers);
    axios.post("/question/save", {
      question: question,
      type: answers[0].type,
      rating: rating,
      rightAnswer: rightAnswer.answer,
      wrongOne: wrongAnswers[0].answer,
      wrongTwo: wrongAnswers[1].answer,
      wrongThree: wrongAnswers[2].answer,
    });
  };
  return (
    <div className="question-page">
      {lives === 0 && <Redirect to="/scoreboard" />}
      <h1 id="header">Question {counter}</h1>
      <div>lives: {lives}</div>
      <div>points: {points}</div>
      <Question question={question} />
      {!answered && (
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
                lives={lives}
                setLives={setLives}
                setAnswered={setAnswered}
                answered={answered}
              />
            );
          })}
        </div>
      )}
      {answered && (
        <RatingPage
          setAnswered={setAnswered}
          counter={counter}
          setCounter={setCounter}
          sendRate={sendRate}
        />
      )}
    </div>
  );
}

export default QuestionPage;
