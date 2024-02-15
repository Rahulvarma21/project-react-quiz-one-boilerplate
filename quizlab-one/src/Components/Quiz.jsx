import "./QuizStyle.css";
function Quiz() {
  return (
    <div className="quizContainer">
      <h1>Question</h1>
      <p id="number">1 of 15</p>
      <p id="questionTag">Which is the only mammal that can jump?</p>
      <div className="options">
        <button className="opts">Dog</button>
        <button className="opts">Elephant</button>
        <button className="opts">Goat</button>
        <button className="opts">Lion</button>
      </div>
      <div className="selectionBtns">
        <button id="prev">Previous</button>
        <button id="next">Next</button>
        <button id="quit">Quit</button>
      </div>
    </div>
  );
}

export default Quiz;
