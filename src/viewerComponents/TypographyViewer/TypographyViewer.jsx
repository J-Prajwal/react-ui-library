import React from "react";
import Typography from "../../components/Typography/Typography";

const TypographyViewer = () => {
  const customStyles = {
    textTransform: "uppercase",
    color: "magenta",
    textDecoration: "line-through",
  };
  return (
    <Typography style={customStyles} variant={"h1"} weight={"regular"}>
      tech with prajwal
    </Typography>
  );
};

export default TypographyViewer;
