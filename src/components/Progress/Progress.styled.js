import styled, { keyframes } from "styled-components";

const defaultProperties = {
  height: "20px",
  width: "400px",
  progress: "0%",
};

export const ProgressOuterContainer = styled.div`
  border: 1px solid ${({ color }) => color};
  height: ${({ height }) => height || defaultProperties["height"]};
  width: ${({ width }) => width || defaultProperties["width"]};
  border-radius: ${({ rounded }) => (rounded ? "20px" : "none")};
`;

export const ProgressInnerContainer = styled.div`
  height: 100%;
  width: ${({ progress }) => `${progress}%` || defaultProperties["progress"]};
  border-radius: ${({ rounded }) => (rounded ? "20px" : "none")};
  background-color: ${({ color }) => color || "black"};
  transition: width 0.3s;
`;

export const CircleProgressBarWrapper = styled.div`
  position: relative;
  width: ${({ size }) => size * 2 + 30}px;
  height: ${({ size }) => size * 2 + 30}px;
`;

export const CircleProgress = styled.svg`
  height: 100%;
  width: 100%;
`;

export const Circle = styled.circle`
  fill: none;
  stroke: #e6e6e6; // light grey color for the main circle
  stroke-width: ${({ weight }) => weight}px;
`;

export const ProgressCircle = styled.circle`
  fill: none;
  stroke-width: ${({ weight }) => weight}px;
`;

export const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-weight: 500;
  color: ${({ color }) => color || "black"};
  font-size: ${({ size }) => Math.floor(size / 5)}px;
  transform: translate(-50%, -50%);
`;
