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
          <Circle cx='50%' cy='50%' r={size} />
          <ProgressCircle
            cx='50%'
            cy='50%'
            r={size}
            strokeWidth={"10px"}
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            stroke={color || "black"}
          />
        </CircleProgress>
        <ProgressText color={color} size={size}>
          {progress}%
        </ProgressText>
      </CircleProgressBarWrapper>
    );
};

export default Progress;
