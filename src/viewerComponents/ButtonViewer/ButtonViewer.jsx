// This is what the user of the Library will write
import React from "react";
import Button from "../../components/Button/Button";

const ButtonViewer = () => {
  const handleOnClick = () => {
    alert("The Button was clicked...");
  };
  return (
    <Button
      variant={"solid"}
      isLoading={false}
      isDisabled={false}
      size={"sm"}
      color={undefined}
      bgColor={undefined}
      onClick={handleOnClick}
    >
      Click Here...
    </Button>
  );
};

export default ButtonViewer;
