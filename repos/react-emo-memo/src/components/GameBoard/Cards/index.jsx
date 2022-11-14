import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../Card";

export function Cards() {
  const BASE_URL = "https://emoji-api.com/emojis";
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${BASE_URL}?access_key=${import.meta.env.VITE_API_KEY}`)
      .then((res) => res.json())
      .then((result) => setData(result.slice(0, 7)));
  }, []);
  return (
    <Wrapper>
      {data?.map((d) => (
        <Card character={d.character} name={d.unicodeName} key={d.codePoint} />
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
