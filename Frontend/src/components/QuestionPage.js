import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import Answer from "./Answer";
import "../styles/QuestionPage.css";
import { Redirect } from "react-router";
import RatingPage from "./RatingPage";
import Timer from "./Timer";

function QuestionPage(props) {
  const [counter, setCounter] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [rightAnswer, setRightAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(true);
  const [answerTime, setAnswerTime] = useState(0);

  useEffect(() => {
    // if (counter % 3 == 0)
    //   axios.get("/question/savedQuestion").then((allData) => {
    //     console.log(allData);
    //     if (allData !== "empty") {
    //       setQuestion(allData.data.question);
    //       setAnswers(allData.data.answers);
    //     }
    //   });
    // else
    axios.get("/question/generate").then((allData) => {
      console.log(allData);
      setQuestion(allData.data.question);
      setAnswers(allData.data.answers);
    });
  }, [counter]);

  useEffect(() => {
    if (lives === 0) {
      axios.post("/scoreboard", { player: props.user, score: points });
    }
  }, [lives]);

  useEffect(() => {
    setTimer(true);
    setTimeout(() => {
      setAnswered(true);
      if (answered) {
        setTimeout(() => {
          answered || setCounter(counter + 1);
          setAnswered(false);
        }, 3000);
      }
    }, 20000);
  }, [question]);

  setInterval(() => {
    setAnswerTime(answerTime + 1);
  }, 1000);

  const handleClick = async (selectedAnswer) => {
    console.log("hi");
    setTimer(false);
    setAnswered(true);
    const savedAnswer = await axios.get(
      `/question/check?answer=${selectedAnswer.answer}`
    );
    if (savedAnswer.data.answer === selectedAnswer.answer) {
      setPoints(Math.round((1 - answerTime / 20000) * 70 + 30) + 1 + points);
    } else {
      setLives(lives - 1);
    }
    setRightAnswer(savedAnswer.data.answer);
    if (answered) {
      setTimeout(() => {
        answered || setCounter(counter + 1);
        setAnswered(false);
      }, 3000);
    }
  };

  const sendRate = (rating) => {
    setAnswered(false);
    setCounter(counter + 1);
    let wrongAnswers = [];
    answers.forEach((answer) => {
      if (answer.answer !== rightAnswer) {
        wrongAnswers.push(answer.answer);
      }
    });
    if (wrongAnswers.length === 1) wrongAnswers = [...wrongAnswers, null, null];
    axios.post("/question/save", {
      question: question,
      type: answers[0].type,
      rating: rating,
      rightAnswer: rightAnswer,
      wrongOne: wrongAnswers[0],
      wrongTwo: wrongAnswers[1],
      wrongThree: wrongAnswers[2],
    });
  };
  return (
    <div className="question-page">
      {lives === 0 && !answered && <Redirect to="/scoreboard" />}
      <h1 id="header">Question {counter}</h1>
      {timer && <Timer />}
      <div id="data">
        <span className="player-data">lives: {lives}</span>
        {"    "}
        <span className="player-data">points: {points}</span>
      </div>
      <Question question={question} />
      <p>answered: {answered ? "true" : "false"}</p>
      {!answered && (
        <div id="answer-container">
          {answers.map((answer, i) => {
            return (
              <Answer
                key={i}
                handleClick={handleClick}
                answer={answer}
                setTimer={setTimer}
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
