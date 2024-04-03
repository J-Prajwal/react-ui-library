import React, { useState } from "react";
import Progress from "../../components/Progress/Progress";

const ProgressViewer = () => {
  const [value, setValue] = useState(0);

  const simulateDownload = (speed) => {
    const interval = setInterval(() => {
      setValue((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, speed);
  };

  const handleStartDownload = () => {
    setValue(0);
    simulateDownload(10);
  };

  const handleSlowDownload = () => {
    setValue(0);
    simulateDownload(200);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Progress progress={value} size={150} variant={"bar"} rounded={true} />
      <Progress progress={100} size={150} variant={"circle"} color={"orange"} />
      {/* <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => handleStartDownload()}>
          Start Download - Fast
        </button>
        <button onClick={() => handleSlowDownload()}>
          Start Download - Slow
        </button>
        <button onClick={() => setValue(0)}>Set Value to Zero - 0</button>
      </div> */}
    </div>
  );
};

export default ProgressViewer;
