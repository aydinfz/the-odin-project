import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Card } from "../Card";

export function Cards() {
  const BASE_URL = "https://emoji-api.com/emojis";
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchEmojis() {
      const response = await fetch(
        `${BASE_URL}?access_key=${import.meta.env.VITE_API_KEY}`
      );
      const json = await response.json();
      const result = await json.slice(0, 7);
      setData(shuffleData(result));
    }
    fetchEmojis();
  }, []);

  const ref = useRef([]);

  const addCardId = (id) => {
    ref.current = [id, ...ref.current];
    checkCardsId(ref.current);
    console.log(ref.current);
  };

  const checkCardsId = (_cardsId) => {
    isGameOver(new Set(_cardsId).size !== _cardsId.length);
  };

  const isGameOver = (round) => {
    if (round) console.log("dieee");
    else console.log("continuee");
  };

  /* 
  const shuffleData = () => {
    return data.sort(() => Math.random() - 0.5);
  }; */

  return (
    <Wrapper>
      {data?.map((d) => (
        <Card
          key={d.codePoint}
          character={d.character}
          name={d.unicodeName}
          id={d.codePoint}
          addCardId={addCardId}
        />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
`;
