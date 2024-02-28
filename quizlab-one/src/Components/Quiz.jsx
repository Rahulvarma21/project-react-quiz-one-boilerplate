import { useState } from "react";
import { Link } from "react-router-dom";
import questions from "../resources/quizQuestion";
import "./QuizStyle.css";
function Quiz() {
  const [state, setState] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);

  const handleOption = (option) => {
    const answer = questions[state].answer;
    setAttempt((attempt) => attempt + 1);
    if (option == answer) {
      alert("Correct Answer! 🫡");
      setCorrect((correct) => correct + 1);
      setState((state) => state + 1);
      setScore((score) => score + 1);
    } else {
      alert("Wrong Answer! 🗿");
      setState((state) => state + 1);
    }
  };

  const handlePrev = () => {
    if (state == 0) {
      setState(14);
    } else {
      setState(state - 1);
    }
  };

  const handleNext = () => {
    if (state == 14) {
      setState(0);
    } else {
      setState(state + 1);
    }
  };

  const handleQuit = () => {
    alert("Are you Quitting LAD!! 🗿🗿🗿");
    setState(0);
  };

  const handleClickFinish = () => {
    setState(0);
  };

  if (state == 15) {
    localStorage.setItem("Score", score);
    localStorage.setItem("Correct", correct);
    localStorage.setItem("Attempt", attempt);
    window.location.href = "/result";
  }

  return (
    <div className="quizContainer">
      <h1>Question</h1>
      <p id="number">
        {state + 1} of {questions.length}
      </p>
      <p className="questionTag">{questions[state].question}</p>
      <div className="options">
        <button
          onClick={() => handleOption(questions[state].optionA)}
          className="opts"
        >
          {questions[state].optionA}
        </button>
        <button
          onClick={() => handleOption(questions[state].optionB)}
          className="opts"
        >
          {questions[state].optionB}
        </button>
        <button
          onClick={() => handleOption(questions[state].optionC)}
          className="opts"
        >
          {questions[state].optionC}
        </button>
        <button
          onClick={() => handleOption(questions[state].optionD)}
          className="opts"
        >
          {questions[state].optionD}
        </button>
      </div>
      <div className="selectionBtns">
        <button className="btn" onClick={handlePrev} id="prev">
          Previous
        </button>
        <button className="btn" onClick={handleNext} id="next">
          Next
        </button>
        <button className="btn" onClick={handleQuit} id="quit">
          Quit
        </button>
        <Link to="/Result">
        <button className="btn" onClick={handleClickFinish}>
          Finish
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Quiz;
