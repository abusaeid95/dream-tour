import React from 'react';

const OrderTable = ({ order }) => {
    return (
            <tr className="text-center">
                <td>{order.Country} ----- {order.location}</td>
                <td>{order.user_name}</td>
                <td>{order.status}</td>
                <td>{order.user_email}</td>
                <td>{order.user_Phone}</td>
                <td>{order.img}</td>
            </tr>
    );
};

export default OrderTable;