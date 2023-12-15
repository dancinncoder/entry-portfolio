import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../components/Button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

function Main() {
  const [keyword] = useTypewriter({
    words: ["number 3", "'3'"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  const [isInitialLandering, setIsInitialLandering] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const messageGroups = [
    {
      id: 1,
      blackText: "After only",
      blueText: "3 months",
      secondBlackText: " of learning development",
    },
    {
      id: 2,
      blackText: "After working on a total of ",
      blueText: "3 projects",
      secondBlackText: "",
    },
    {
      id: 3,
      blackText: `Always asking 
      ‘why?’`,
      blueText: " 3 times",
      secondBlackText: "",
    },
    {
      id: 4,
      blackText: "Established",
      blueText: " 3 identities",
      secondBlackText: " as a front-end developer",
    },
    {
      id: 5,
      blackText: "Wanna hear my story?",
      blueText: "",
      secondBlackText: "",
    },
  ];

  const navigate = useNavigate();

  const MoveOnToTheNextMessage = () => {
    setMessageIndex((prevIndex) => prevIndex + 1);
    if (messageIndex === 4) {
      return navigate("/story");
    }
  };

  const { blackText, blueText, secondBlackText } = messageGroups[messageIndex];

  const finishInitialLanderingHandler = () => {
    setIsInitialLandering(false);
  };

  return (
    <StOuterFrame>
      <StHighlightContainer>
        <StMainMessageContainer>
          <StMessage>
            {isInitialLandering ? (
              <StInitialMessageContainer>
                <StInitialMessage>
                  I'm a <StKeyword>&nbsp;{keyword}</StKeyword>
                  <StKeyword>
                    <Cursor />
                  </StKeyword>
                  developer
                </StInitialMessage>
                <StStartButton
                  type="button"
                  onClick={finishInitialLanderingHandler}
                >
                  next
                </StStartButton>
              </StInitialMessageContainer>
            ) : (
              <StNonInitialMessageContainer>
                <StNonInitialMessage>
                  <StBlackText>
                    {blackText}
                    <StBlueText>
                      &nbsp;{blueText}
                      <Cursor />
                    </StBlueText>
                    {secondBlackText}
                  </StBlackText>
                </StNonInitialMessage>
                <Button MoveOnToTheNextMessage={MoveOnToTheNextMessage} />
              </StNonInitialMessageContainer>
            )}
          </StMessage>
        </StMainMessageContainer>
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
  width: 46rem;
`;

const StMessage = styled.p`
  border: 1px solid yellow;
  font-size: 4rem;
  font-weight: 900;
  color: #353535;
  width: 46rem;
`;

const StInitialMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StNonInitialMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const StInitialMessage = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 900;
  color: #353535;
  border: 1px solid orange;
  width: 46rem;
  margin-top: 4rem;
`;

const StNonInitialMessage = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  font-weight: 900;
  color: #353535;
  border: 1px solid orange;
  width: 46rem;
`;

const StKeyword = styled.span`
  /* border: 1px solid blue; */
  font-size: 4rem;
  font-weight: 900;
  color: #3182f6;
`;

const StStartButton = styled.button`
  background-color: #3182f6;
  font-size: 2rem;
  font-weight: 900;
  color: white;
  border: none;
  height: 4.5rem;
  width: 8.5rem;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: 0.1s ease;
  &:hover {
    background-color: #2361b9;
    font-size: 2.05rem;
    /* transform: scale(1.03); */
  }
`;

const StBlackText = styled.span`
  text-align: center;
`;
const StBlueText = styled.span`
  color: #3182f6;
`;
const StSecondBlackText = styled.span``;
