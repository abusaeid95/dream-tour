import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import './MyBooking.css'

const MyBooking = () => {
    const { user } = useAuth();
    const [mybooking, setMybooking] = useState([]);
    const [deletitem, setDeleteitem]= useState('');


    useEffect(() => {
        fetch(`http://localhost:5000/mybooking/${user?.email}`)
            .then(res => res.json())
            .then(data => setMybooking(data))
            
    }, [deletitem])
    const deletebooking = (id) =>{
        const proceed = window.confirm('Are you want to cancel?')
        if(proceed){
            const url=`http://localhost:5000/mybooking/${user?.email}/${id}`
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert('Cancel Successfully')
                        setDeleteitem(result.deletedCount)
                    }
                })
        }
    }

    // const proceed = window.confirm('Are you want to delete?')
    //     if (proceed) {
    //         const url = `http://localhost:5000/booked/${id}`
    //         fetch(url, {
    //             method: "DELETE"
    //         }).then(res => res.json())
    //             .then(result => {
    //                 if (result.deletedCount > 0) {
    //                     alert('Deleted Successfully')
    //                     const remainingUsers = bookeditems.filter(user => user._id !== id);
    //                     setBookeditems(remainingUsers)
    //                 }
    //             })
    //     }


    return (
        <>

            <Card>
                {
                  mybooking.map(cartitem=>
                  <Card.Body>
                    <div className="row ofrimg">
                        <div className="col">
                            <h3>{cartitem.Country}</h3>
                        </div>
                        <div className="col">
                            <h3>{cartitem.location}</h3>
                        </div>
                        <div className="col">
                            <h3>{cartitem.status}</h3>
                        </div>
                        <div className="col">
                            <h3><img src={cartitem.img} alt="" /></h3>
                        </div>
                        <div className="col mt-auto mb-auto ">
                            <button onClick={()=>deletebooking(cartitem._id)} className="bg-danger p-2 px-4 me-2 rounded text-white">Cancel</button>
                        </div>
                    </div>

                </Card.Body>)      
                }
            </Card>

            {/* <Card.Body>
                    <div className="row ofrimg">
                        <div className="col">
                            <h3>{mybooking.Country}</h3>
                        </div>
                        <div className="col">
                            <h3>{mybooking.location}</h3>
                        </div>
                        <div className="col">
                            <h3><img src={mybooking.img} alt="" /></h3>
                        </div>
                        <div className="col mt-auto mb-auto ">
                            <button onClick={()=>deletebooking(mybooking._id)} className="bg-danger p-2 px-4 me-2 rounded text-white">Cancel</button>
                        </div>
                    </div>

                </Card.Body> */}
        </>
    );
};

export default MyBooking;