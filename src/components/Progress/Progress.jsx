import React, { useEffect, useState } from "react";
import {
  Circle,
  CircleProgress,
  CircleProgressBarWrapper,
  ProgressCircle,
  ProgressInnerContainer,
  ProgressOuterContainer,
  ProgressText,
} from "./Progress.styled";

const Progress = ({
  progress,
  variant,
  color,
  height,
  width,
  rounded,
  size = 150,
  weight = 5,
}) => {
  const circumference = 2 * Math.PI * size;
  const progressOffset = ((100 - progress) / 100) * circumference;

  if (variant === "bar")
    return (
      <ProgressOuterContainer
        color={color}
        height={height}
        width={width}
        rounded={rounded}
      >
        <ProgressInnerContainer
          progress={progress}
          rounded={rounded}
          color={color}
        />
      </ProgressOuterContainer>
    );
  else
    return (
      <CircleProgressBarWrapper size={size}>
        <CircleProgress>
          <Circle weight={weight} r={size} cx={"50%"} cy={"50%"} />
          <ProgressCircle
            weight={weight}
            stroke={color || "black"}
            r={size}
            cx={"50%"}
            cy={"50%"}
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
          />
        </CircleProgress>
        <ProgressText size={size}> {progress}% </ProgressText>
      </CircleProgressBarWrapper>
    );
};

export default Progress;
