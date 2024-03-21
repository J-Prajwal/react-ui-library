import React from "react";
import { Bubble, BubbleWrapper, Spinner } from "./Loader.styled";

const Loader = ({ width, color, variant, size }) => {
  return (
    <div style={{ padding: "25px 25px" }}>
      {variant === "spinner" ? (
        <Spinner width={width} color={color} size={size} />
      ) : (
        <BubbleWrapper>
          <Bubble size={size} color={color} />
          <Bubble
            size={size}
            color={color}
            style={{ animationDelay: "0.2s" }}
          />
          <Bubble
            size={size}
            color={color}
            style={{ animationDelay: "0.4s" }}
          />
        </BubbleWrapper>
      )}
    </div>
  );
};

export default Loader;
