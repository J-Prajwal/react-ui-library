import styled, { keyframes } from "styled-components";
import { lightenHexColor } from "../../utils";

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: ${({ color, weight }) =>
    `${weight || "2px"} solid ${color || "black"}`};
  border-bottom: ${({ color, weight }) =>
    `${weight || "2px"} solid ${lightenHexColor(color, 50) || "black"}`};
  border-radius: 50%;
  height: ${({ size }) => size || "3rem"};
  width: ${({ size }) => size || "3rem"};
  animation: ${rotation} 1s linear infinite;
`;

const upDown = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
`;

export const Bubble = styled.div`
  height: ${({ size }) => size || "2rem"};
  width: ${({ size }) => size || "2rem"};
  border-radius: 50%;
  background-color: ${({ color }) => color || "black"};
  margin: 0 10px;
  animation: ${upDown} 1s ease-in-out infinite;
`;

export const BubbleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
