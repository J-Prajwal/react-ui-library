import styled from "styled-components";

const defaultProperties = {
  height: "20px",
  width: "400px",
  value: "0%",
};

export const ProgressOuterContainer = styled.div`
  border: 1px solid ${({ color }) => color};
  height: ${({ height }) => height || defaultProperties["height"]};
  width: ${({ width }) => width || defaultProperties["width"]};
  border-radius: ${({ rounded }) => (rounded ? "20px" : "none")};
`;

export const ProgressInnerContainer = styled.div`
  height: 100%;
  width: ${({ value }) => `${value}%` || defaultProperties["value"]};
  border-radius: ${({ rounded }) => (rounded ? "20px" : "none")};
  background-color: ${({ color }) => color};
  transition: width 0.3s;
`;
