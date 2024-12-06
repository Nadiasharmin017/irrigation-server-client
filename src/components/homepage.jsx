import React, { useState } from "react";

function HomePage() {
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
    setTreeData(updatedData);
  };

  return (
    <div className="min-h-screen bg-base-200">
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
                <button
                  className={`btn btn-success btn-sm mr-2 ${
                    tree.isMotorRunning ? "btn-disabled" : ""
                  }`}
                  onClick={() => handleMotorControl(tree.id, "start")}
                >
                  Start Motor
                </button>
                <button
                  className={`btn btn-error btn-sm ${
                    !tree.isMotorRunning ? "btn-disabled" : ""
                  }`}
                  onClick={() => handleMotorControl(tree.id, "stop")}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <p className="mt-2 text-sm">
                Sensor Status:{" "}
                <span
                  className={`font-bold ${
                    tree.sensorStatus === "Running"
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
    </div>
  );
}

export default HomePage;
