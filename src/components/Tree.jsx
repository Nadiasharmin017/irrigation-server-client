import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const TreeListPage = () => {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    const fetchTrees = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/trees'); // Replace with your API endpoint
        const data = await response.json();
        setTrees(data);
      } catch (error) {
        console.error('Error fetching tree data:', error);
      }
    };
    fetchTrees();
  }, []);

  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen bg-green-50 flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Tree List</h1>
      <div className="overflow-x-auto w-full max-w-4xl bg-white rounded-lg shadow-md p-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-left">Tree Name</th>
              <th className="text-left">Height (m)</th>
              <th className="text-left">Category</th>
              <th className="text-left">Motor State</th>
            </tr>
          </thead>
          <tbody>
            {trees.map((tree) => (
              <tr key={tree.tree1.treeId}>
                <td>{tree.tree1.details.treeName}</td>
                <td>{tree.tree1.details.treeHeight}</td>
                <td>{tree.tree1.details.treeCategory}</td>
                <td>{tree.tree1.motorRun.state ? 'On' : 'Off'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default TreeListPage;
