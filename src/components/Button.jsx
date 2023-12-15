import React from "react";
import { styled } from "styled-components";

function Button() {
  return <StButton type="button">next</StButton>;
}

export default Button;

const StButton = styled.button`
  background-color: #3182f6;
  font-size: 2rem;
  font-weight: 900;
  color: white;
  border: none;
  height: 5rem;
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
