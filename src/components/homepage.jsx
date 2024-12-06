import React, { useEffect, useState } from "react";
import Showdata from "./Showdata";
import { ref, onValue, set } from "firebase/database";
import database from "../../firebase.config";
import Navbar from "./Navbar";

function HomePage() {

  const [manualControl, setManualControl] = useState(true);
  const [manualDuration, setManualDuration] = useState(10);
  const [sensorData, setSensorData] = useState(null);
  const [soilMoisture, setSoilMoisture] = useState(null);

  const [manualControl2, setManualControl2] = useState(true);
  const [manualDuration2, setManualDuration2] = useState(10);
  const [sensorData2, setSensorData2] = useState(null);
  const [soilMoisture2, setSoilMoisture2] = useState(null);

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
    const tree2Ref = ref(database, "Tree2");

    // Listen for changes in Tree1 data
    onValue(tree2Ref, (snapshot) => {
      const treeData = snapshot.val();
      if (treeData) {
        setManualControl2(treeData.manualControl);
        setManualDuration2(treeData.manualDuration);
        setSensorData2(treeData.sensorData);
        setSoilMoisture2(treeData.soilMoisture);
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

  const [treeData, setTreeData] = useState([
    { id: 1, name: "Tree 1", sensorStatus: "Idle", isMotorRunning: false },
    { id: 2, name: "Tree 2", sensorStatus: "Idle", isMotorRunning: false },
  ]);

  const handleMotorControl = (treeId, action) => {
    const updatedData = treeData.map((tree) =>
      tree.id === treeId
        ? {
          ...tree,
          isMotorRunning: action === "start",
          sensorStatus: action === "start" ? "Running" : "Idle",
        }
        : tree
    );
    const treeRef = ref(database, "Tree1/manualControl");
    const tree2Ref = ref(database, "Tree2/manualControl");
    if (treeId === 1) {

      if (action === "start") {
        set(treeRef, true); // Toggle between true and false
      }
      else {
        set(treeRef, false);
      }
      // set(treeRef, !manualControl); // Toggle between true and false
    }
    else {

      if (action === "start") {
        set(tree2Ref, true); // Toggle between true and false
      }
      else {
        set(tree2Ref, false);
      }
      // set(tree2Ref, !manualControl2); // Toggle between true and false
    }
    setTreeData(updatedData);

  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* nav section */}
    <Navbar></Navbar>

      {/* Header Section */}
      <div className="hero bg-primary text-white py-10">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Your Dashboard!</h1>
            <p className="py-4">
              Manage your plants efficiently with real-time updates and motor
              controls.
            </p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex justify-center mt-10">
        <div className="avatar online">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src="https://via.placeholder.com/150"
              alt="User Profile"
            />
          </div>
        </div>
      </div>
      <p className="text-center mt-2 text-xl font-bold">Hello, User!</p>

      {/* Motor Controls Section */}
      <div className="my-10 px-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Manual Motor Controls
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {treeData.map((tree) => (
            <div
              key={tree.id}
              className="card shadow-lg bg-white rounded-lg p-5 flex flex-col items-center"
            >
              <img
                src={`https://via.placeholder.com/150?text=${tree.name}`}
                alt={tree.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{tree.name}</h3>
              <p className="mt-2 text-sm">Sensor Status: {tree.sensorStatus}</p>
              <div className="mt-4">
                {/* Start Motor Button */}
                <button
                  className={`btn btn-success btn-sm mr-2 ${(tree.id === 1 && manualControl) || (tree.id === 2 && manualControl2)
                      ? "btn-disabled"
                      : ""
                    }`}
                  onClick={() => handleMotorControl(tree.id, "start")}
                  disabled={(tree.id === 1 && manualControl) || (tree.id === 2 && manualControl2)}
                >
                  Start Motor
                </button>

                {/* Stop Motor Button */}
                <button
                  className={`btn btn-error btn-sm ${!((tree.id === 1 && manualControl) || (tree.id === 2 && manualControl2))
                      ? "btn-disabled"
                      : ""
                    }`}
                  onClick={() => handleMotorControl(tree.id, "stop")}
                  disabled={!((tree.id === 1 && manualControl) || (tree.id === 2 && manualControl2))}
                >
                  Stop Motor
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Tree Details Section */}
      <div className="my-10 px-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Real-Time Tree Updates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-72">
          {treeData.map((tree) => (
            <div
              key={tree.id}
              className="card shadow-lg bg-white rounded-lg p-5 flex flex-col items-center"
            >
              {
                tree?.id === 1 ?
                  <div>
                    <Showdata sensorData={sensorData} soilMoisture={soilMoisture} manualControl={manualControl}></Showdata>
                  </div>
                  :
                  <div>
                    <Showdata sensorData={sensorData2} soilMoisture={soilMoisture2} manualControl={manualControl2}></Showdata>
                  </div>


              }
              {/* <img
                src={`https://via.placeholder.com/150?text=${tree.name}`}
                alt={tree.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              /> */}
              <h3 className="text-xl font-bold">{tree.name}</h3>
              <p className="mt-2 text-sm">
                Mannual Control Status:{" "}
                <span
                  className={`font-bold ${tree.sensorStatus === "Running"
                    ? "text-green-500"
                    : "text-gray-500"
                    }`}
                >
                  {tree.sensorStatus}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <Showdata></Showdata> */}
    </div>
  );

}

export default HomePage;
