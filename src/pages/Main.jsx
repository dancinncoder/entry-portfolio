import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Main() {
  const [keyword] = useTypewriter({
    words: ["number 3", "'3'"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <StOuterFrame>
      <StHighlightContainer>
        <StMainMessageContainer>
          <StMessage>
            I'm a <StKeyword>{keyword}</StKeyword>
            <StKeyword>
              <Cursor />
            </StKeyword>
            developer
          </StMessage>
        </StMainMessageContainer>
        <Button />
      </StHighlightContainer>
    </StOuterFrame>
  );
}

export default Main;

const StOuterFrame = styled.div`
  border: 1px solid red;
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StHighlightContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 70rem;
  height: 40rem;
`;

const StMainMessageContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StMessage = styled.h1`
  border: 1px solid blue;
  font-size: 4rem;
  font-weight: 900;
  color: #353535;
`;

const StKeyword = styled.span`
  border: 1px solid blue;
  font-size: 4rem;
  font-weight: 900;
  color: #3182f6;
`;
