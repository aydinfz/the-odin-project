import { useEffect, useState } from "react";
import "./App.css";
import { Header, Card, Footer, Container, GameOver } from "./components";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false)
  return (
    <div className="App">
      {gameOver && <GameOver score={score}/>}
      <Header score={score} bestScore={bestScore} />
      <Container
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        setGameOver={setGameOver}
      />
    </div>
  );
}

export default App;
