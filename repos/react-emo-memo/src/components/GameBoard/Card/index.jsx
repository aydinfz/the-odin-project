import React from "react";
import styled from "styled-components";

export function Card({ character, name, key }) {
  return (
    <StyledCard>
      <CardEmo>{character}</CardEmo>
      <CardInfo>{name}</CardInfo>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 150px;
  height: 200px;

  border-radius: 5px;
  background-color: black;
  /*   box-shadow: 0px 4px 12px 0px rgba(250, 250, 36, 0.837) #ffffff;
  transition: all 200ms;
  overflow: hidden; */
  cursor: pointer;
`;

const CardEmo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  font-size: 70px;
  height: 100px;
  width: 100px;
  margin: 2vh;
`;
const CardInfo = styled.div`
  color:white;
  padding: 0 10px 10px
`;
