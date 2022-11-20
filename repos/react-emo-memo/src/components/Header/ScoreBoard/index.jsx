import React from "react";
import styled from "styled-components";

export function ScoreBoard({ score, bestScore }) {
  return (
    <StyledBoard>
      <Score> Score:{score} </Score>
      <Divider />
      <BestScore> Best:{bestScore} </BestScore>
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 22px;
  padding: 10px 10px 0 10px;
  margin-left: 2rem;
`;
const Score = styled.p`
  color: #f0ff64;
`;
const Divider = styled.div`
  height: 24px;
  width: 1px;
  background-color: white;
  margin: 0 10px;
`;
const BestScore = styled.p`
  color: #ff8c3a;
`;
