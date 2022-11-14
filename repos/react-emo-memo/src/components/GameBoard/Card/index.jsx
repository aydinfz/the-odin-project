import React from "react";
import styled, { keyframes, css } from "styled-components";

export function Card({ character, name, key }) {
  return (
    <StyledCard>
      <CardEmo>{character}</CardEmo>
      <CardInfo>{name}</CardInfo>
    </StyledCard>
  );
}
const appear = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  width: 150px;
  height: 200px;

  border-radius: 5px;
  background-color: black;
  box-shadow: 1px 1px 10px 0px rgba(250, 250, 250, 0.837);
  transition: all 200ms;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: translate(0%, -3%);
    transition: 0.1s ease-out;
    box-shadow: 1px 1px 10px 0px #ff8c3a;
  }
`;

const CardEmo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 70px;
  height: 100px;
  width: 100px;
  margin: 2vh;
`;
const CardInfo = styled.div`
  color: white;
  padding: 0 10px 10px;
`;
