import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Question from "./Question";
import Answer from "./Answer";
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

  const answerTime = useRef(0);
  const intTime = useRef(20000);

  async function getData() {
    let allData = await axios.get("/question/savedQuestion");
    if (!(allData.data !== "empty" && counter % 3 === 0))
      allData = await axios.get("/question/generate");
    setQuestion(allData.data.question);
    setAnswers(allData.data.answers);
  }

  useEffect(() => {
    if (lives === 0) {
      axios.post("/scoreboard", { player: props.user, score: points });
    }
  }, [lives]);

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      answerTime.current = answerTime.current + 1;
      if (intTime.current - answerTime.current * 1000 <= 0 || answered) {
        clearInterval(interval);
        setAnswered(false);
        handleClick(false, interval);
        setLives(lives - 1);
      }
      if (lives === 0) clearInterval(interval);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter]);

  const handleClick = async (selectedAnswer, interval) => {
    setAnswered(true);
    setTimer(false);
    clearInterval(interval);
    if (selectedAnswer) {
      const savedAnswer = await axios.get(
        `/question/check?answer=${selectedAnswer.answer}`
      );
      if (savedAnswer.data.answer === selectedAnswer.answer) {
        setPoints(
          Math.round(
            (1 - (answerTime.current * 1000) / intTime.current) * 70 + 30
          ) +
            1 +
            points
        );
      } else {
        setLives(lives - 1);
      }
      setRightAnswer(savedAnswer.data.answer);
    }
  };

  const sendRate = (rating) => {
    setAnswered(false);
    setCounter(counter + 1);

    if (rating) {
      let wrongAnswers = [];
      answers.forEach((answer) => {
        if (answer.answer !== rightAnswer) {
          wrongAnswers.push(answer.answer);
        }
      });
      if (wrongAnswers.length === 1)
        wrongAnswers = [...wrongAnswers, null, null];
      axios.post("/question/save", {
        question: question,
        rating: rating,
        rightAnswer: rightAnswer,
        wrongOne: wrongAnswers[0],
        wrongTwo: wrongAnswers[1],
        wrongThree: wrongAnswers[2],
      });
    }

    if (intTime.current > 5000) intTime.current = intTime.current - 500;
    setTimer(true);
    setAnswered(false);
    answerTime.current = 0;
    setCounter(counter + 1);
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
            return <Answer key={i} handleClick={handleClick} answer={answer} />;
          })}
        </div>
      )}
      {timer && (
        <div
          className="round-time-bar"
          data-style="smooth"
          style={{
            "--duration": String(
              intTime.current / 1000 >= 5 ? intTime.current / 1000 : 5
            ),
          }}
        >
          <div></div>
        </div>
      )}
      {answered && <RatingPage sendRate={sendRate} />}
    </div>
  );
}

export default QuestionPage;
