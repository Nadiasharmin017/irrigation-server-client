import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    alert("Registration successful!");
    navigate("/home"); // Redirect to the Home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 shadow-lg p-5">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="Enter email"
            className="input input-bordered mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="Enter password"
            className="input input-bordered mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleRegister}
          className="btn btn-primary w-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Register;
