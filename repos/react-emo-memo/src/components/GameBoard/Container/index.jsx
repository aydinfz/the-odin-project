import React from "react";
import styled from "styled-components";
import { Card } from "../Card";
import { Cards } from "../Cards";

export function Container({ score, setScore, bestScore, setBestScore }) {
  return (
    <StyledContainer>
      <Cards
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #0e1010;
  min-height: 100vh;
`;
