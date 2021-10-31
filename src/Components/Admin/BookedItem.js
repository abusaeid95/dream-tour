import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const axios = require('axios');



const BookedItem = () => {
    const [bookeditems, setBookeditems] = useState([])
    useEffect(() => {
        fetch('https://frightening-phantom-67062.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setBookeditems(data))
    }, [])
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
                        const remainingUsers = bookeditems.filter(user => user._id !== id);
                        setBookeditems(remainingUsers)
                    }
                })
        }

    }

    const updateHandler = (id) => {
        axios.put(`https://frightening-phantom-67062.herokuapp.com/booked/update/${id}`,)
            .then(function (response) {
                if (response.data.modifiedCount) {
                    alert('update successfully');
                    const remainingUsers = bookeditems.filter(user => user._id !== id);
                    setBookeditems(remainingUsers)
                }
            })
    }
    return (
        <div>
            {
                bookeditems.map(bookeditem =>


                    <Card>
                        <Card.Body>
                            <div className="row ofrimg">
                                <div className="col">
                                    <h3>{bookeditem.Country}</h3>
                                </div>
                                <div className="col">
                                    <h3>{bookeditem.location}</h3>
                                </div>
                                <div className="col">
                                    <h3><img src={bookeditem.img} alt="" /></h3>
                                </div>
                                <div className="col mt-auto mb-auto ">
                                    <button onClick={() => updateHandler(bookeditem._id)} className="bg-danger p-2 px-4 me-2 rounded text-white">Update</button>
                                    <button onClick={() => handleDelete(bookeditem._id)} className="bg-danger p-2 px-4  rounded text-white">Delete</button>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                )}
        </div>
    );
};

export default BookedItem;