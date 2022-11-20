import React from "react";
import styled from "styled-components";
import { LogoSection } from "./LogoSection";
import { ScoreBoard } from "./ScoreBoard";

export function Header({ score, bestScore }) {
  return (
    <HeaderStyle>
      <LogoSection />
      <ScoreBoard score={score} bestScore={bestScore} />
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  display: flex;
  font-family: "Courier New", Courier, monospace;
  padding: 0 5rem;
  height: 100px;
  background-color: #000000;
  font-family: "Courier New", Courier, monospace;
`;
