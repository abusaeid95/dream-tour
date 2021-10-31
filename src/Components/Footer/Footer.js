import React from 'react';

const Footer = () => {
    return (
        <div className="container footerc">
            <div>
                <div className="row row-cols-1 row-cols-md-4 ">
                    <div className="col text-center d-flex align-items-center justify-content-center">
                        <div>
                        <img src="https://i.ibb.co/zR9mBzF/travel-tour-landscape-sun-airplane-600w-366089225.png" alt="" />
                        <p class="card-text text-center">Since 2002, we have been offering travel services of the highest quality, combining our energy and enthusiasm.</p>
                        </div>
                    </div>

                    <div className="col text-center d-flex align-items-center justify-content-center">
                        <div>
                            <h5>Our Contacts</h5>
                            <p class="card-title text-center"><i class="fas fa-map-marker-alt"></i> 732/21 Second Street, Manchester,<br /> King Street, Kingston United Kingdom</p>
                            <p class="card-text text-center"><i class="fas fa-phone-alt"></i> 345-677-554</p>
                        </div>
                    </div>
                    <div className="col text-center d-flex align-items-center justify-content-center">
                        <div>
                            <p class="card-title text-center"><i class="fas fa-mobile-alt"></i> 323-678-567</p>
                            <p class="card-text text-center"><i class="far fa-envelope"></i> info@dreamtour.org</p>
                            <p class="card-text text-center"><i class="fas fa-location-arrow"></i> dreamtour.org</p>
                        </div>
                    </div>
                    <div className="col text-center d-flex align-items-center justify-content-center">
                        <div>
                            <h3 class="card-title text-center">Follow Us</h3>
                            <i class="fab fa-facebook-square px-2"></i>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-youtube px-2"></i>
                            <i class="fab fa-instagram-square"></i>
                            <br />
                            <button className="bg-info rounded">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;