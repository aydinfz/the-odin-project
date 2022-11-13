import { useEffect, useState } from "react";
import "./App.css";
import {Header, Card, Footer} from "./components";

function App() {
  const BASE_URL = "https://emoji-api.com/emojis";
  const API_KEY = "f15cb239f62af09fbb3afe930b3df57a0dce244a";
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}?access_key=${API_KEY}`)
      .then((res) => res.json())
      .then((result) => setData(result.slice(0, 5)));
  }, []);

  return (
    <div className="App">
      <Header/>
      <Card/>
      <h1>
        {data?.map((d) => (
          <div key={d.codePoint}>
            <h1>{d.character}</h1>
            <p>{d.unicodeName}</p>
          </div>
        ))}
      </h1>
    </div>
  );
}

export default App;
