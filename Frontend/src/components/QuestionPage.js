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
  const sendRate = () => {
    setAnswered(false);
    setCounter(counter + 1);
    //add to sql
    // const rightAnswer = answers.filter((ans) => {
    //   return (ans.right = true);
    // });
    // console.log(
    //   "🚀 ~ file: QuestionPage.js ~ line 30 ~ rightAnswer ~ rightAnswer",
    //   rightAnswer
    // );

    // const wrongAnswers = answers.filter((ans) => {
    //   return (ans.right = false);
    // });
    let wrongAnswers = [];
    let rightAnswer;
    answers.forEach((answer) => {
      if (answer.right) {
        rightAnswer = answer;
        console.log(
          "🚀 ~ file: QuestionPage.js ~ line 43 ~ answers.forEach ~ rightAnswer",
          rightAnswer
        );
      } else {
        wrongAnswers.push(answer);
      }
    });
    console.log(
      "🚀 ~ file: QuestionPage.js ~ line 35 ~ wrongAnswers ~ wrongAnswers",
      wrongAnswers
    );
    axios.post("/question/save", {
      question: question,
      type: answers[0].type,
      right_answer: rightAnswer,
      wrong_1: wrongAnswers[0],
      wrong_2: wrongAnswers[1] || null,
      wrong_3: wrongAnswers[2] || null,
    });
  };
  return (
    <div className="question-page">
      {lives === 0 && <Redirect to="/scoreboard" />}
      <h1 id="header">Question {counter}</h1>
      <div>lives: {lives}</div>
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
              lives={lives}
              setLives={setLives}
              setAnswered={setAnswered}
              answered={answered}
            />
          );
        })}
      </div>
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
