import React, { useState, useEffect } from "react";

function TreeControl() {
  const [trees, setTrees] = useState([]);
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    // Fetch tree and sensor data (for demo, using dummy data)
    setTrees([{ name: "Tree 1" }, { name: "Tree 2" }]);
    setSensorData([{ id: 1, value: "25°C" }, { id: 2, value: "30°C" }]);
  }, []);

  return (
    <div>
      <h3>Tree Details:</h3>
      <ul>
        {trees.map((tree, index) => (
          <li key={index}>{tree.name}</li>
        ))}
      </ul>

      <h3>Sensor Data:</h3>
      <ul>
        {sensorData.map((data, index) => (
          <li key={index}>Sensor {data.id}: {data.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default TreeControl;
