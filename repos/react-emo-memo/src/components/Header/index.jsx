import React from "react";
import styled from "styled-components";
import { LogoSection } from "./LogoSection";
import { ScoreBoard } from "./ScoreBoard";

export function Header() {
  return (
    <HeaderStyle>
      <LogoSection />
      <ScoreBoard />
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
