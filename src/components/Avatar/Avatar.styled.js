import styled from "styled-components";

const sizeMap = {
  "2xs": "25",
  xs: "30",
  sm: "35",
  md: "40",
  lg: "45",
  xl: "50",
  "2xl": "60",
};

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: ${({ alignment }) =>
    alignment === "horizontal" ? "row" : "column"};
  cursor: pointer;
  height: fit-content;
  width: fit-content;
  gap: 10px;
`;

export const AvatarImage = styled.img`
  border: ${({ outlineWeight, outlineColor }) =>
    `${outlineWeight} solid ${outlineColor}`};
  border-radius: 50%;
  height: ${({ size }) => sizeMap[size || "md"]}px;
  width: ${({ size }) => sizeMap[size || "md"]}px;
  margin-right: ${({ srcList, disableGrouping }) =>
    srcList && !disableGrouping && srcList.length > 1 && "-20px"};
  margin-bottom: ${({ srcList, disableGrouping }) =>
    srcList && !disableGrouping && srcList.length > 1 && "-20px"};
`;

export const AvatarInitials = styled.div`
  border: ${({ outlineWeight, outlineColor }) =>
    `${outlineWeight} solid ${outlineColor}`};
  border-radius: 50%;
  height: ${({ size }) => sizeMap[size || "md"]}px;
  width: ${({ size }) => sizeMap[size || "md"]}px;
  font-size: ${({ size }) => sizeMap[size || "md"] - 25}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  background-color: ${({ bgColor }) => bgColor && "#e2e8f0"};
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: ${({ size }) => sizeMap[size || "md"] - 35}px;
  font-weight: 500;
`;

export const SubTitle = styled.div`
  font-size: ${({ size }) => sizeMap[size || "md"] - 37}px;
`;
