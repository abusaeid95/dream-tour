import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center contact-fdiv">
                <div>
                    <h1>Contact Us</h1>
                    <h5 className="text-center"><i>Let`s keep in touch!</i></h5>
                </div>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    <div className="col d-flex align-items-center justify-content-center">
                        <div>
                            <h5>Contact Our Agency</h5>
                            <p class="card-title">At SunTravel we want to make sure that your trip is everything you could possibly dream of. Whether you want inspiration and guidance in planning your next adventure or need help with an existing booking, our travel experts are here to help. Send us an email or give our team a call to book your flights, plan your adventure or get help with any problems you encounter along the way.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-center">
                        <div>
                            <h5>Our Contacts</h5>
                            <p class="card-text"><i class="fas fa-phone-alt"></i> 345-677-554</p>
                            <p class="card-title"><i class="fas fa-map-marker-alt"></i> 732/21 Second Street, Manchester, King Street,<br />
                                Kingston United Kingdom</p>
                            <p class="card-title"><i class="fas fa-mobile-alt"></i> 323-678-567</p>
                            <p class="card-text"><i class="far fa-envelope"></i> info@dreamtour.org</p>
                            <p class="card-text"><i class="fas fa-location-arrow"></i> dreamtour.org</p>
                        </div>
                    </div>
                    <div className="col text-center d-flex align-items-center justify-content-center input-div">
                        <div>
                            <div className="my-5">
                                <h5>Any Questions?</h5>
                                <input type="text" placeholder="Your Name" required />
                                <br />
                                <input type="email" placeholder="Your Email" required />
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <br />
                                <button type="submit">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;