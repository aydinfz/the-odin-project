import { useEffect, useState } from "react";
import "./App.css";
import { Header, Container, Footer, GameOver } from "./components";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lvl, setLvl] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="App">
      {console.log({lvl: lvl})}
      {gameOver && <GameOver score={score} setGameOver={setGameOver} />}
      <Header score={score} bestScore={bestScore} lvl={lvl} />
      <Container
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        lvl={lvl}
        setLvl={setLvl}
        setGameOver={setGameOver}
      />
    </div>
  );
}

export default App;
