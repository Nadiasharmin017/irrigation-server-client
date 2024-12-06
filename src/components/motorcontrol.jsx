import React from "react";

function MotorControl() {
  const handleMotorControl = (action) => {
    console.log(action);
  };

  return (
    <div>
      <button onClick={() => handleMotorControl("Start Motor")}>Start Motor</button>
      <button onClick={() => handleMotorControl("Stop Motor")}>Stop Motor</button>
    </div>
  );
}

export default MotorControl;
