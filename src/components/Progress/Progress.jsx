import React from "react";
import {
  ProgressInnerContainer,
  ProgressOuterContainer,
} from "./Progress.styled";

const Progress = ({ value, variant, color, height, width, rounded }) => {
  return (
    <ProgressOuterContainer
      color={color}
      height={height}
      width={width}
      rounded={rounded}
    >
      <ProgressInnerContainer value={value} rounded={rounded} color={color} />
    </ProgressOuterContainer>
  );
};

export default Progress;
