import "./Result.css";
function Result() {
  return (
    <div className="container">
      <h2>Result</h2>
      <div className="resultContainer">
        <h3>You need more practice!</h3>
        <h1>Your score is 20%</h1>
        <div className="results">
          <p>Total no of questions</p>
          <p>15</p>
        </div>
        <div className="results">
          <p>Number of attempted questions</p>
          <p>9</p>
        </div>
        <div className="results">
          <p>Number of correct answers</p>
          <p>3</p>
        </div>
        <div className="results">
          <p>Number of wrong answers</p>
          <p>6</p>
        </div>
      </div>
      <div className="footer">
        <button id="play">Play again</button>
        <button id="home">Back to Home</button>
      </div>
    </div>
  );
}

export default Result;
