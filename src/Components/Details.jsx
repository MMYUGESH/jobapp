import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row, Card } from 'react-bootstrap';


function Details() {
    const [details, setDetails] = useState([]);


    useEffect(() => {
        axios.get("https://colegedetails.herokuapp.com/details").then(res => {
            setDetails(res.data);
        });
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Row xs={1} md={2} className="g-4">
                            {details.map((details) => (
                                <Col key={details._id}>
                                    <Card className="mt-2">
                                        <Card.Body>
                                            <Card.Title>{details.companyname}</Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col>
                                                        <h4>First Name</h4>
                                                        <p>{details.firstname}</p>
                                                    </Col>
                                                    <Col>
                                                        <h4>Last Name</h4>
                                                        <p>{details.lastname}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4>Phone</h4>
                                                        <p>{details.phone}</p>
                                                    </Col>
                                                    <Col>
                                                        <h4>Email ID</h4>
                                                        <p>{details.email}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4>10th Mark in %</h4>
                                                        <p>{details.sslc}</p>
                                                    </Col>
                                                    <Col>
                                                        <h4>12th Mark in %</h4>
                                                        <p>{details.hsc}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4>Degree</h4>
                                                        <p>{details.degree}</p>
                                                    </Col>
                                                    <Col>
                                                        <h4>Designation</h4>
                                                        <p>{details.collegename}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4>CGPA</h4>
                                                        <p>{details.cgpa}</p>
                                                    </Col>
                                                    <Col>
                                                        <h4>Skills</h4>
                                                        <p>{details.skills}</p>
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Details;
