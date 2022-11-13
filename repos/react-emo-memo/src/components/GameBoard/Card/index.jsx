import React from "react";
import styled from "styled-components";

export function Card() {
  return (
    <div>
      <CardStyle>
        <CardEmo>Emoji</CardEmo>
        <CardInfo>Card ino</CardInfo>
      </CardStyle>
    </div>
  );
}

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 10vw;
  height: 10vw;
  background-color: green;
`;

const CardEmo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    height: 10vh;
    margin: 2vh;
`;
const CardInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
