import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright © 2022 aydinfz</p>
      <GithubLink href="https://github.com/aydinfz" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem;
  background-color: black;
  color: white;
`;

const GithubLink = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: white;
  font-size: 1.8rem;
  &:hover {
    color: #ffe83a;
  }
  &:active {
    color: white;
  }
`;
