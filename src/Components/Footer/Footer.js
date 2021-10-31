import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="container footerc">
            <hr />
            <div>
                <div className="row row-cols-1 row-cols-md-4 ">
                    <div className="col text-center d-flex align-items-center justify-content-center">
                        <div>
                            <img className="fotimg" src="https://i.ibb.co/zR9mBzF/travel-tour-landscape-sun-airplane-600w-366089225.png" alt="" />
                            <p className="card-text text-center">Since 2002, we have been offering travel services of the highest quality, combining our energy and enthusiasm.</p>
                        </div>
                    </div>

                    <div className="col text-center d-flex align-items-center justify-content-center">
                        <div>
                            <h5>Our Contacts</h5>
                            <p className="card-title text-center"><i className="fas fa-map-marker-alt"></i> 732/21 Second Street, Manchester,<br /> King Street, Kingston United Kingdom</p>
                            <p className="card-text text-center"><i className="fas fa-phone-alt"></i> 345-677-554</p>
                        </div>
                    </div>
                    <div className="col text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p className="card-title text-center"><i className="fas fa-mobile-alt"></i> 323-678-567</p>
                            <p className="card-text text-center"><i className="far fa-envelope"></i> info@dreamtour.org</p>
                            <p className="card-text text-center"><i className="fas fa-location-arrow"></i> dreamtour.org</p>
                        </div>
                    </div>
                    <div className="col text-center d-flex align-items-center justify-content-center">
                        <div>
                            <h3 className="card-title text-center">Follow Us</h3>
                            <i className="fab fa-facebook-square px-2"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-youtube px-2"></i>
                            <i className="fab fa-instagram-square"></i>
                            <br />
                            <button className="footerbtn rounded">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;