import React from 'react';
import './OfferCard.css'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OfferCard = ({ offer }) => {
    return (

        <div className=" col">
            <div className=" card h-100 main-card">
                <img className="card-img" src={offer.img} alt="" />
                <div className="card-body">
                    <div className="d-flex small-pic">
                        <div className="author d-flex" >
                            <img className="author-img" src={offer.img} alt="" />
                            <div className="p-3 text-center">
                                <p>{offer.Country}</p>
                            </div>
                        </div>
                        <div>
                            <p className="p-2 category">{offer.time}</p>
                        </div>
                    </div>
                    <h5 className="card-title">{offer.location}</h5>
                    <div className="d-flex timeb">
                        <p>{offer?.description.slice(0,120)}</p>
                        {/* <p><i className="fas fa-book-open"></i> {lectures} Lectures</p> */}
                    </div>
                    <div className="d-flex timeb">
                        <h5>${offer.price}</h5>
                        <Link to={`/booking/${offer?._id}`}><button className="offerbtn text-white p-2 px-3">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OfferCard;