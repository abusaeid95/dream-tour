import React from 'react';

const OrderTable = (props) => {
    const {order }=props

    return (
            <tr className="text-center">
                <td>{order?.Country} ----- {order?.location}</td>
                <td>{order?.user_name}</td>
                <td>{order?.status}</td>
                <td>{order?.user_email}</td>
                <td>{order?.user_Phone}</td>
                <td><button onClick={() => props.updateHandler(order._id)} className="bg-danger p-2 px-4 me-2 rounded text-white">Aprrove</button></td>
                <td><button onClick={() => props.handleDelete(order._id)} className="bg-danger p-2 px-4  rounded text-white">Delete</button></td>
            </tr>
    );
};

export default OrderTable;