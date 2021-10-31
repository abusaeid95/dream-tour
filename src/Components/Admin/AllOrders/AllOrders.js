import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllOrders.css';
import OrderTable from './OrderTable';

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/booked')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <div>
            <Table striped bordered hover variant="dark">
                <thead className="text-center">
                    <tr>
                        <th>Offer Name</th>
                        <th>User Name</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Offer Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderTable
                            key={order._id}
                            order={order}
                        ></OrderTable>)
                    }
                </tbody>
            </Table>
            </div>
            <div className="text-center my-3">
            <Link to="/admin" className="bg-info text-white text-decoration-none p-3 rounded mt-5">Back to Admin</Link>
            </div>
        </div>
    );
};

export default AllOrders;