import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const SensorListPage = () => {
  const [sensors, setSensors] = useState([]);

  useEffect(() => {
    const fetchSensors = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/sensors'); // Replace with your API endpoint
        const data = await response.json();
        setSensors(data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };
    fetchSensors();
  }, []);

  return (
   <div>
    <Navbar></Navbar>
     <div className="min-h-screen bg-blue-50 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Sensor List</h1>
      <div className="overflow-x-auto w-full max-w-4xl bg-white rounded-lg shadow-md p-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-left">Customer ID</th>
              <th className="text-left">Soil Moisture (%)</th>
              <th className="text-left">Manual Control</th>
              <th className="text-left">Sensor Data</th>
            </tr>
          </thead>
          <tbody>
            {sensors.map((sensor) => (
              <tr key={sensor._id}>
                <td>{sensor.customerId}</td>
                <td>{sensor.soilMoisture}</td>
                <td>{sensor.manualControl ? 'Enabled' : 'Disabled'}</td>
                <td>{sensor.sensorData}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
};

export default SensorListPage;
