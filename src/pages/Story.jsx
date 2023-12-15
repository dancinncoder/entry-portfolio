import React from "react";
import { styled } from "styled-components";

function Story() {
  return (
    <StOuterFrame>
      <div>Story</div>
    </StOuterFrame>
  );
}

export default Story;

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
