// import Home from './Components/Home'
import { Routes,Route } from "react-router-dom";
import Quiz from "./Components/Quiz";
import Home from "./Components/Home";
import Result from "./Components/Result";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/quiz" element={<Quiz/>}/>
    <Route path="/Result" element={<Result/>}/>
    </Routes>
  );
}

export default App;
