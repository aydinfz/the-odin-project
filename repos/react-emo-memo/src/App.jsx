import { useEffect, useState } from "react";
import "./App.css";
import { Header, Card, Footer, Container } from "./components";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} />
      <Container
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
