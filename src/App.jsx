import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';  // Ensure the correct path
import Register from './components/register';  // Ensure the correct path
import HomePage from './components/homePage';  // Ensure the correct path
import CustomerList from './components/CustomerList';
import AboutPage from './components/About';
import TreeListPage from './components/Tree';
import SensorListPage from './components/Sensor';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path= "/about" element= {<AboutPage/>}></Route>
        <Route path="/trees" element={<TreeListPage />} />
            <Route path="/sensors" element={<SensorListPage />} />
        {/* <Route path='/'></Route> */}
        
      </Routes>
    </Router>
  );
}

export default App;
