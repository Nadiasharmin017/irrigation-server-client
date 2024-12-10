import React from 'react';
import Navbar from './Navbar';

const AboutPage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-primary mb-6">About Us</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to our website! We are a customer-oriented business dedicated to providing excellent services to meet your needs.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Our mission is to offer high-quality solutions and a seamless experience to our clients. Whether you’re here to learn more about us or explore our services, we’re excited to have you!
        </p>
        <p className="text-lg leading-relaxed">
          Feel free to reach out if you have any questions or need further information. We're here to help!
        </p>
      </div>

      <div className="max-w-4xl w-full mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-secondary mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed">
          We started with a simple goal: to make the process easier and more accessible for our customers. Over time, we grew our services and team, striving to become leaders in the industry.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
