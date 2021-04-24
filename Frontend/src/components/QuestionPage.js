import React, { useEffect, useState } from "react";
import axios from "axios";
import Question from "./Question";
import Answer from "./Answer";
import "../styles/QuestionPage.css";
import { Redirect } from "react-router";
import RatingPage from "./RatingPage";

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
  const [intTime, setintTime] = useState(20000);

  useEffect(() => {
    if (counter % 3 === 0)
      axios.get("/question/savedQuestion").then((allData) => {
        if (allData.data !== "empty") {
          setQuestion(allData.data.question);
          setAnswers(allData.data.answers);
        } else
          axios.get("/question/generate").then((allData) => {
            setQuestion(allData.data.question);
            setAnswers(allData.data.answers);
          });
      });
    else
      axios.get("/question/generate").then((allData) => {
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
    if (answered) {
      setTimeout(() => {
        setAnswered(false);
        setCounter(counter + 1);
      }, 3000);
    }
  }, [answered]);

  useEffect(() => {
    timer && startTimer();
  }, [timer]);

  const handleClick = async (selectedAnswer) => {
    setAnswered(true);
    setTimer(false);
    const savedAnswer = await axios.get(
      `/question/check?answer=${selectedAnswer.answer}`
    );
    if (savedAnswer.data.answer === selectedAnswer.answer) {
      setPoints(Math.round((1 - answerTime / 20) * 70 + 30) + 1 + points);
    } else {
      setLives(lives - 1);
    }
    setRightAnswer(savedAnswer.data.answer);

    await setTimeout(() => {
      answered || setCounter(counter + 1);
      setTimer(true);
      setAnswered(false);
    }, 3000);
  };
  const startTimer = () => {
    setAnswerTime(0);
    setTimeout(() => {
      answerTime === 20 || setTimer(false);
      answerTime === 20 || setLives(lives - 1);
      answerTime === 20 || setAnswered(true);
      setintTime(intTime - 500);
    }, intTime);
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
      <div id="data">
        <span className="player-data">lives: {lives}</span>
        {"    "}
        <span className="player-data">points: {points}</span>
      </div>

      <Question question={question} />
      {!answered && (
        <div id="answer-container">
          {answers.map((answer, i) => {
            return (
              <Answer
                key={i}
                handleClick={handleClick}
                answer={answer}
                answerTime={answerTime}
                setAnswerTime={setAnswerTime}
              />
            );
          })}
        </div>
      )}
      {timer && (
        <div
          className="round-time-bar"
          data-style="smooth"
          style={{ "--duration": String(intTime / 1000 ? intTime / 1000 : 5) }}
        >
          <div></div>
        </div>
      )}
      {answered && (
        <RatingPage
          setAnswered={setAnswered}
          counter={counter}
          setCounter={setCounter}
          sendRate={sendRate}
          setTimer={setTimer}
        />
      )}
    </div>
  );
}

export default QuestionPage;
