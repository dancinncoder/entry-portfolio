import React from "react";
import { styled } from "styled-components";

function Story() {
  return (
    <StOuterFrame>
      <StStoryContainer>
        <StStoryMiddleContainer>
          <StTitle>3 months of learning</StTitle>
          <StContentContainer>
            <StLeftContent>StLeftContent</StLeftContent>
            <StTabBarContainer>
              <StTabBar>
                <StCategoryCircle></StCategoryCircle>
                <StCategoryCircle></StCategoryCircle>
                <StCategoryCircle></StCategoryCircle>
                <StCategoryCircle></StCategoryCircle>
              </StTabBar>
              <StButton>next</StButton>
            </StTabBarContainer>
          </StContentContainer>
        </StStoryMiddleContainer>
      </StStoryContainer>
    </StOuterFrame>
  );
}

export default Story;

const StOuterFrame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: black;
`;

const StStoryContainer = styled.div`
  border: 1px solid #353535;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 70rem;
  height: 40rem;
  color: white;
`;

const StTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  font-weight: 900;
  text-align: left;
`;

const StStoryMiddleContainer = styled.div`
  width: 55rem;
  height: 35rem;
  padding: 3rem;
  border: 1px solid yellow;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 45rem;
  border: 1px solid red;
  gap: 1rem;
`;
const StLeftContent = styled.div`
  border: 1px solid blue;
  width: 80%;
  height: 90%;
`;
const StTabBarContainer = styled.div`
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  width: 13%;
  height: 90%;
`;
const StTabBar = styled.div`
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const StButton = styled.button``;
const StCategoryCircle = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #e9e9e9;
`;
