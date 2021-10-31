import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import OrderTable from './OrderTable';
import './AllOrders.css';
const axios = require('axios');

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    const [update, setUpdate]=useState(false)
    useEffect(() => {
        fetch('https://frightening-phantom-67062.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [update])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you want to delete?')
        if (proceed) {
            const url = `https://frightening-phantom-67062.herokuapp.com/booked/${id}`
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers)
                    }
                })
        }

    }

    const updateHandler = (id) => {
        axios.put(`https://frightening-phantom-67062.herokuapp.com/booked/update/${id}`,)
            .then(function (response) {
                if (response.data.modifiedCount) {
                    alert('update successfully');
                    setUpdate(true);
                    setUpdate(false);
                }
            })
    }
    return (
        <div>
            <div>
            <Table responsive striped bordered hover variant="dark">
                <thead className="text-center">
                    <tr>
                        <th>Offer Name</th>
                        <th>User Name</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Status Update</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <OrderTable
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            updateHandler={updateHandler}
                        ></OrderTable>)
                    }
                </tbody>
            </Table>
            </div>
        </div>
    );
};

export default AllOrders;