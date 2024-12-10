import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch customers from the API
    useEffect(() => {
        fetch('http://localhost:3000/api/customers')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch customers');
                }
                return response.json();
            })
            .then((data) => {
                setCustomers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []); // Empty array ensures it runs only once

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Customer ID</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>City</th>
                        <th>Device ID</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer._id}>
                            <td>{customer.name}</td>
                            <td>{customer.customerId}</td>
                            <td>{customer.email}</td>
                            <td>{customer.phoneNo}</td>
                            <td>{customer.city}</td>
                            <td>{customer.deviceID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default CustomerList;
