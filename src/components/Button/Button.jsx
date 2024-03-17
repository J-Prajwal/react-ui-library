// This is what the developer of the Library will write
import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return <ButtonWrapper>{children}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  border: 1px solid black;
  height: 50px;
  width: 80px;
  color: #5353a5;
  border-radius: 10px;
`;
