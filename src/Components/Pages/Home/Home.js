import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import OfferCard from '../OfferCard/OfferCard';
import './Home.css'

const Home = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('https://frightening-phantom-67062.herokuapp.com/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1560955076-dc49e76c2846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://livedemo00.template-help.com/wt_60075_v2/images/backgrounds/background-01-1920x900.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitt.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://livedemo00.template-help.com/wt_60075_v2/images/backgrounds/background-02-1920x900.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://livedemo00.template-help.com/wt_60075_v2/images/backgrounds/background-03-1920x900.jpg"
                            alt="fourth slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="container">
                <div className="my-3 text-center">
                    <h1>Best Offers</h1>
                    <small>Check out our top-rated tours</small>
                </div>

                <div className=" row row-cols-1 row-cols-md-3 g-4 my-4">

                    {
                        offers.map(offer => <OfferCard offer={offer}></OfferCard>)
                    }

                </div>
            </div>
            <div className="featurecard d-flex align-items-center justify-content-center">
                <div className="container">
                    <h1 className="d-flex align-item-center text-white mb-5 justify-content-center">Why DreamTour</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <div class="card-body"><h2 class="card-title text-center">PERSONALIZED MATCHING</h2>
                                    <h5 class="card-text text-center">Our search system helps you find a personalized tour in just a few clicks.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div class="card-body">
                                    <h2 class="card-title text-center">WIDE VARIETY OF DESTINATIONS</h2>
                                    <h5 class="card-text text-center">With SunTravel, you’ll find a perfect destination among hundreds available.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div class="card-body">
                                    <h2 class="card-title text-center">HIGHLY QUALIFIED SERVICE</h2>
                                    <h5 class="card-text text-center">Our high level of service is officially recognized by thousands of clients.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div class="card-body">
                                    <h2 class="card-title text-center">24/7 SUPPORT</h2>
                                    <h5 class="card-text text-center">Our travel agents are always there to support you during your trip..</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div class="card-body">
                                    <h2 class="card-title text-center">HANDPICKED HOTELS</h2>
                                    <h5 class="card-text text-center">We pick the hotels with the utmost reputation and positive reviews.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div class="card-body">
                                    <h2 class="card-title text-center">BEST PRICE GUARANTEE</h2>
                                    <h5 class="card-text text-center">We guarantee you’ll get top-notch comfort at an affordable price.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thrddstle d-flex align-items-center justify-content-center">
                <div className="">
                    <h1 className="text-white">Fastest Way to Compare and <br /> Book over 450 Cheap Flights</h1>
                    <button className="bg-dark text-white    rounded p-2 ">FIND YOUR FLIGHT</button>
                </div>
            </div>
        </div>
    );
};

export default Home;