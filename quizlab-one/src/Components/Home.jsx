import "./HomeStyle.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="titleContainer">
      <h2 id="title">Quiz App</h2>
      <Link to="/quiz">
        <button id="playBtn">Play</button>
      </Link>
    </div>
  );
}

export default Home;
