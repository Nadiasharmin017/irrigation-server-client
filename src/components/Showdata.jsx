import React from 'react';

const Showdata = ({sensorData, soilMoisture,manualControl }) => {
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow inline-block ...">
        <div className="stat">
          <div className="stat-title">Sensor Data:</div>
          <div className="stat-value">{sensorData}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Soil Moisture:</div>
          <div className="stat-value">{soilMoisture}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Motor Status</div>
          <div className="stat-value">{manualControl ? "True" : "False"}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    );
};

export default Showdata;