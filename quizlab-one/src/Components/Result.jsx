import "./Result.css";
import { Link } from "react-router-dom";
function Result() {
  const score = localStorage.getItem("Score");
  const correct = localStorage.getItem("Correct");
  const attempt = localStorage.getItem("Attempt");
  return (
    <div className="container">
      <h2>Result</h2>
      <div className="resultContainer">
        <h3>You need more practice!</h3>
        <h1>Your score is {score}</h1>
        <div className="results">
          <p>Total no of questions</p>
          <p>15</p>
        </div>
        <div className="results">
          <p>Number of attempted questions</p>
          <p>{attempt}</p>
        </div>
        <div className="results">
          <p>Number of correct answers</p>
          <p>{correct}</p>
        </div>
        <div className="results">
          <p>Number of wrong answers</p>
          <p>{attempt - correct}</p>
        </div>
      </div>
      <div className="footer">
        <Link to="/">
          <button id="play">Play again</button>
          {localStorage.clear()}
        </Link>
        <Link to="/">
          <button id="home">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Result;
