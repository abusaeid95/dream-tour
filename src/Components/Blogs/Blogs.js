import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    const object = [
        { img: "https://i.ibb.co/0mZv4gd/images.jpg", desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings. Designed by Danish architect Jørn Utzon, but completed by an Australian architectural team headed by Peter Hall, the building was formally opened on 20 October 1973 after a gestation beginning with Utzon's 1957 selection as winner of an international design competition. The Government of New South Wales, led by the premier, Joseph Cahill, authorised work to begin in 1958 with Utzon directing construction. The government's decision to build Utzon's design is often overshadowed by circumstances that followed, including cost and scheduling overruns as well as the architect's ultimate resignation. The building and its surrounds occupy the whole of Bennelong Point on Sydney Harbour, between Sydney Cove and Farm Cove, adjacent to the Sydney central business district and the Royal Botanic Gardens, and close by the Sydney Harbour Bridge",
        title:"Sydney Opera House"

         },
        { img: "https://i.ibb.co/DfSyGhX/images-1.jpg", desc: "The Gili Islands are a group of 3 tiny islands – Gili Trawangan, Gili Meno and Gili Air – in Indonesia, near the coast of northwest Lombok Island. Characterized by sandy beaches fringed with palm trees, they're known for their coral reefs just offshore. On the smallest island of Gili Meno, sea turtles swim at Turtle Point. At Gili Trawangan, the largest island, a sunken ship sits at Wreck Point near Mentigi Beach.", title:"Gili Islands"},
        { img: "https://i.ibb.co/5Ybcz8y/images-2.jpg", desc: "Sultan Ahmed Mosque, also known as the Blue Mosque, is an Ottoman-era historical imperial mosque located in Istanbul, Turkey. A functioning mosque, it also attracts large numbers of tourist visitors. It was constructed between 1609 and 1616 during the rule of Ahmed I. Its Külliye contains Ahmed's tomb, a madrasah and a hospice. Hand-painted blue tiles adorn the mosque’s interior walls, and at night the mosque is bathed in blue as lights frame the mosque’s five main domes, six minarets and eight secondary domes.", title:"The Blue Mosque" },
        { img: "https://i.ibb.co/MfvMXV0/images-4.jpg", desc: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower. Locally nicknamed, it was constructed from 1887 to 1889 as the entrance to the 1889 World's Fair and was initially criticised by some of France's leading artists and intellectuals for its design, but it has become a global cultural icon of France and one of the most recognisable structures in the world. The Eiffel Tower is the most visited monument with an entrance fee in the world; 6.91 million people ascended it in 2015. The tower is 324 metres tall, about the same height as", title:"Eiffel Tower" },
        { img: "https://i.ibb.co/WFHjbHC/images-3.jpg", desc: "Piazza San Marco, often known in English as St Mark's Square, is the principal public square of Venice, Italy, where it is generally known just as la Piazza. All other urban spaces in the city are called campi. The Piazzetta is an extension of the Piazza towards San Marco basin in its south east corner. The two spaces together form the social, religious and political centre of Venice and are commonly considered together. A remark usually attributed to Napoleon calls the Piazza San Marco " , title:"St. Mark's Square" },
        { img: "https://i.ibb.co/nMPMjCL/licensed-image.jpg", desc: "The Louvre, or the Louvre Museum, is the world's most-visited museum and a historic monument in Paris, France. It is the home of many of the most known work of arts, including the Mona Lisa. A central landmark of the city, it is located on the Right Bank of the Seine in the city's 1st arrondissement. Approximately 38,000 objects from prehistory to the 21st century are exhibited over an area of 72,735 square meters. Due to the COVID-19 pandemic, the museum was closed for 150 days in 2020, and attendance plunged by 72 percent to 2.7 million. Nonetheless, the Louvre still topped the list of most-visited art museums in the world in 2020. The museum is housed in the Louvre Palace, originally built in the late 12th to 13th century under Philip II. Remnants of the Medieval Louvre fortress are visible in the basement of the museum. Due to urban expansion, the fortress eventually lost its defensive function, and in 1546 Francis I converted it into the primary residence of the French Kings. The building was extended many times to", title:"Louvre Museum" }
    ]
    return (
        <div className="container text-center ">
            <h1 className="my-5">Our Blog</h1>
            <Row xs={1} md={3} className="g-4 mb-3">
                {object.map(blog => (
                    <Col >
                        <Card className="h-100">
                            <Card.Img style={{height: '17rem'}} variant="top" src={blog?.img} />
                            <Card.Body>
                            <Card.Title>{blog?.title}</Card.Title>
                                <Card.Text>
                                    {blog?.desc.slice(0, 200)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Blogs;