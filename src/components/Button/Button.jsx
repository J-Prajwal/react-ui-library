// This is what the developer of the Library will write
import React from "react";
import { ButtonWrapper, Spinner } from "./Button.styled";

const Button = ({
  children,
  variant,
  isLoading,
  isDisabled,
  size,
  color,
  bgColor,
  onClick,
}) => {
  return (
    <ButtonWrapper
      isDisabled={isDisabled}
      disabled={isDisabled}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : children}
    </ButtonWrapper>
  );
};

export default Button;
