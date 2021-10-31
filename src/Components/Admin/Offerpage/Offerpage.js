import React from 'react';
import { Card } from 'react-bootstrap';
import './Offerpage.css'

const Offerpage = (props) => {
    const {Country, location, img, deleteHandle} = props.bookeditem;

    const deleteHandler =()=>{
        deleteHandle();

    }
    return (
        <>

            <Card>
                <Card.Body>
                    <div className="row ofrimg">
                        <div className="col">
                            <h3>{Country}</h3>
                        </div>
                        <div className="col">
                            <h3>{location}</h3>
                        </div>
                        <div className="col">
                            <h3><img src={img} alt="" /></h3>
                        </div>
                        <div className="col mt-auto mb-auto ">
                            <button onClick={deleteHandler} className="bg-danger p-2 px-4 me-2 rounded text-white">Delete</button>
                            <button className="bg-danger p-2 px-4 rounded text-white">Update</button>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </>
    );
};

export default Offerpage;