import React, { useEffect, useState } from "react";
// import database from "./firebase";
import { ref, onValue, set } from "firebase/database";
import database from "../../firebase.config";

const Showdata = () => {
  const [manualControl, setManualControl] = useState(false);
  const [manualDuration, setManualDuration] = useState(10);
  const [sensorData, setSensorData] = useState(null);
  const [soilMoisture, setSoilMoisture] = useState(null);

  // Read data from Firebase
  useEffect(() => {
    const treeRef = ref(database, "Tree1");

    // Listen for changes in Tree1 data
    onValue(treeRef, (snapshot) => {
      const treeData = snapshot.val();
      if (treeData) {
        setManualControl(treeData.manualControl);
        setManualDuration(treeData.manualDuration);
        setSensorData(treeData.sensorData);
        setSoilMoisture(treeData.soilMoisture);
      }
    });
  }, []);

  // Update manual control status
  const toggleManualControl = () => {
    const treeRef = ref(database, "Tree1/manualControl");
    set(treeRef, !manualControl); // Toggle between true and false
  };

  // Update manual duration
  const updateManualDuration = (newDuration) => {
    const treeRef = ref(database, "Tree1/manualDuration");
    set(treeRef, newDuration); // Set the new duration
  };

  return (
    <div>
      <h1>Tree1 Control</h1>
      <div>
        <h2>Sensor Data: {sensorData}</h2>
        <h2>Soil Moisture: {soilMoisture}</h2>
      </div>
      <div>
        <h2>Manual Control: {manualControl ? "Enabled" : "Disabled"}</h2>
        <button onClick={toggleManualControl}>
          {manualControl ? "Disable" : "Enable"} Manual Control
        </button>
      </div>
      <div>
        <h2>Manual Duration: {manualDuration} seconds</h2>
        <button onClick={() => updateManualDuration(manualDuration + 1)}>
          Increase Duration by 1 second
        </button>
      </div>
    </div>
  );
};

export default Showdata;