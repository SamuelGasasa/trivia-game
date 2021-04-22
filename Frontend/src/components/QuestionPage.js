import React, { useEffect, useState } from "react";
// import axios from "axios";
import Question from "./Question";
import Answer from "./Answer";

function QuestionPage() {
  const [counter, setCounter] = useState(1);
  const answers = [1, 2, 3, 4];
  const question = "this is a question";

  useEffect(() => {
    //add axios to answers
    //add axios to question
  });

  return (
    <div>
      <h1>Question {counter}</h1>
      <Question question={question} />
      {answers.map((answer, i) => {
        return (
          <Answer
            key={i}
            answer={answer}
            counter={counter}
            changeCounter={setCounter}
          />
        );
      })}
    </div>
  );
}

export default QuestionPage;
