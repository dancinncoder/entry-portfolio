import React from "react";
import { styled } from "styled-components";
import Button from "../components/Button";

function Main() {
  return (
    <StOuterFrame>
      <StHighlightContainer>
        <StMainMessageContainer>I'm a developer</StMainMessageContainer>
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
`;
