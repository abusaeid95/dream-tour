import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import OfferCard from '../OfferCard/OfferCard';
import './Home.css'

const Home = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/offers')
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
            <div className="my-3 text-center">
                <h1>Best Offers</h1>
                <small>Check out our top-rated tours</small>
            </div>

            <div class=" row row-cols-1 row-cols-md-3 g-4 my-4">

                {
                    offers.map(offer =>  <OfferCard offer={offer}></OfferCard>)
                }

            </div>

            {/* <div className="container">
                <Row xs={1} md={3} className="g-4">
                    {offers.map(offer => <OfferCard offer={offer}></OfferCard>

                    )}
                </Row>
            </div> */}
        </div>
    );
};

export default Home;