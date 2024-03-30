import React from "react";
import styled from "styled-components";
import Typography from "../../components/Typography/Typography";
import { useTheme } from "../../components/Theme/Theme";

const TypographyViewer = () => {
  const theme = useTheme();

  const { main, dark, light, grey, contrastText } = theme;

  return (
    <MainContainer>
      <TypographyContainer>
        <Typography style={{ color: main }} variant={"h1"} weight={"regular"}>
          tech with prajwal
        </Typography>
        <Typography style={{ color: main }} variant={"h2"} weight={"regular"}>
          theme style - main
        </Typography>
      </TypographyContainer>
      <TypographyContainer>
        <Typography style={{ color: dark }} variant={"h1"} weight={"regular"}>
          tech with prajwal
        </Typography>
        <Typography style={{ color: dark }} variant={"h2"} weight={"regular"}>
          theme style - dark
        </Typography>
      </TypographyContainer>
      <TypographyContainer>
        <Typography style={{ color: light }} variant={"h1"} weight={"regular"}>
          tech with prajwal
        </Typography>
        <Typography style={{ color: light }} variant={"h2"} weight={"regular"}>
          theme style - light
        </Typography>
      </TypographyContainer>
      <TypographyContainer>
        <Typography style={{ color: grey }} variant={"h1"} weight={"regular"}>
          tech with prajwal
        </Typography>
        <Typography style={{ color: grey }} variant={"h2"} weight={"regular"}>
          theme style - grey
        </Typography>
      </TypographyContainer>
      <TypographyContainer>
        <Typography
          style={{ color: contrastText }}
          variant={"h1"}
          weight={"regular"}
        >
          tech with prajwal
        </Typography>
        <Typography
          style={{ color: contrastText }}
          variant={"h2"}
          weight={"regular"}
        >
          theme style - contrastText
        </Typography>
      </TypographyContainer>
    </MainContainer>
  );
};

export default TypographyViewer;

const MainContainer = styled.div`
  display: grid;
  border: 1px solid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

const TypographyContainer = styled.div`
  border: 1px solid teal;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
