import React from "react";
import Progress from "../../components/Progress/Progress";

const ProgressViewer = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Progress
        value={78}
        variant={"bar"}
        height={"20px"}
        width={"70vw"}
        color={"#CD5C5C"}
        rounded={true}
      />
    </div>
  );
};

export default ProgressViewer;
