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
  const [question, setQuestion] = useState("");
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);
  const [answered, setAnswered] = useState(false);
  const [timer, setTimer] = useState(true);

  useEffect(() => {
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

  // need to be fixed
  useEffect(() => {
    setTimeout(() => {
      setAnswered(true);
      setTimer(false);
      setLives(lives - 1);
      nextQuestion();
    }, 20000);
  }, [counter]);
  // need to be fixed
  useEffect(() => {
    setTimer(true);
  }, [question]);
  const nextQuestion = () => {
    if (!answered) {
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
      {timer && <Timer />}
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
