import styled, { keyframes } from "styled-components";
import { darkenHexColor } from "../../utils";

const buttonVariant = {
  solid: "none",
  outline: "1px solid black",
  ghosted: "none",
  link: "none",
};

const buttonBackground = {
  solid: "#5353a5",
  outline: "transparent",
  ghosted: "transparent",
  link: "transparent",
};

const buttonSize = {
  sm: "10px 15px",
  md: "15px 20px",
  lg: "20px 25px",
};

export const ButtonWrapper = styled.button`
  border: ${({ variant }) => buttonVariant[variant]};
  height: fit-content;
  width: fit-content;
  padding: ${({ size }) => buttonSize[size]};
  color: black;
  border-radius: 10px;
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  background-color: ${({ variant }) => buttonBackground[variant]};

  &:hover {
    background-color: ${({ variant, isDisabled }) => {
      if (variant !== "link" && !isDisabled)
        return darkenHexColor("#5353a5", 20);
      else if (isDisabled) return "#5353a5";
      else return "transparent";
    }};
    color: ${({ variant, isDisabled }) => {
      if (variant !== "link" && !isDisabled) return "white";
    }};
    text-decoration: ${({ variant, isDisabled }) => {
      if (variant === "link" && !isDisabled) return "underline";
    }};
  }
`;

const rotation = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  height: 15px;
  width: 15px;
  border: 2px solid grey;
  border-bottom: 2px solid lightgrey;
  border-radius: 50%;
  animation: ${rotation} 1s linear infinite;
`;
