import React from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Card } from "../Card";

export function Cards() {
  const BASE_URL = "https://emoji-api.com/emojis";
  const [data, setData] = useState([]);
  const [lvl, setLvl] = useState(1);
  const [cardsNum, setCardsNum] = useState(3);
  
  const ref = useRef([]);
  const selectedCards = ref.current;

  useEffect(() => {
    async function fetchEmojis() {
      const response = await fetch(
        `${BASE_URL}?access_key=${import.meta.env.VITE_API_KEY}`
      );
      const json = await response.json();
      const result = await json.slice(0, cardsNum);
      setData(result);
    }
    fetchEmojis();
  }, [cardsNum]);

  const shuffle = (_data) => {
    return [..._data].sort(() => 0.5 - Math.random());
  };

  const addCardId = (id) => {
    ref.current = [id, ...ref.current];
    checkCardsId();
    setData(shuffle(data));
  };

  const checkCardsId = () => {
    return new Set(selectedCards).size === selectedCards.length;
  };

  useEffect(() => {
    ref.current = [];
    nextLvl();
  }, [lvl]);

  const nextLvl = () => {
    if (cardsNum === selectedCards.length && checkCardsId() === true) {
      setLvl(lvl + 1);
      setCardsNum(2 * lvl + 2);
    }
  };
  nextLvl();

  console.log({ lvl: lvl });
  console.log(selectedCards);
  console.log(checkCardsId());

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
