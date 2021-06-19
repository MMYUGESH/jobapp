import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

function Posts() {
    const [post, setPost] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [applyMessage, setapplyMessage] = useState("");
    const [details, setDetails] = useState({ firstName: "", lastName: "", email: "", phone: "", sslc: "", hsc: "", degree: "", collegename: "", cgpa: "", skills: "", companyname: "" });
    const handleapply = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phone, sslc, hsc, degree, collegename, cgpa, skills, companyname } = details;
        setapplyMessage(<Spinner animation="border" variant="success" />);
        if ((email !== "") && (firstName !== "") && (lastName !== "") && (phone !== "") && (sslc !== "") && (hsc !== "") && (degree !== "") && (collegename !== "") && (cgpa !== "") && (skills !== "") && (companyname !== "")) {
            axios.post("https://colegedetails.herokuapp.com/apply", {
                email: email,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                sslc: sslc,
                hsc: hsc,
                degree: degree,
                collegename: collegename,
                cgpa: cgpa,
                skills: skills,
                companyname: companyname
            }).then((res) => {
                if (res.status === 200) {
                    setapplyMessage(`sucessfully applied`);
                }
            }, (err) => {
                if (err) {
                    setapplyMessage("Some error apply after some time")
                }
            })
        } else {
            setapplyMessage(`please fill all fileds password length greater than 5 `)
        }

    }







    useEffect(() => {
        axios.get("https://colegedetails.herokuapp.com/").then(res => {
            setPost(res.data);
            console.log(res.data);
        });
    }, []);




    return (
        <div>
            <Container className="mt-4 mb-4 ">
                <Row>
                    <Col >
                        <Row xs={1} md={2} className="g-4">
                            {post.map((post) => (
                                <Col className="mt-1">
                                    <Card>
                                        <Card.Img variant="top" src={post.image} alt={post.CompanyName} />
                                        <Card.Body>
                                            <Card.Title>{post.CompanyName}</Card.Title>
                                            <Card.Text>

                                                <Row>
                                                    <Col>
                                                        <h4>Place</h4>
                                                        <p>{post.Place}</p>
                                                    </Col>
                                                    <Col>
                                                        <h4>Designation</h4>
                                                        <p>{post.Designation}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4>Qulaification</h4>
                                                        <p>{post.Qulaification}</p>
                                                    </Col>
                                                    <Col>
                                                        <h4>Year Of Pass</h4>
                                                        <p>{post.YearOfPass}</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <h4>Annual Salary</h4>
                                                        <p>{post.AnnualSalary}</p>
                                                    </Col>
                                                    <Col>
                                                        <Button variant="outline-warning" size="lg" onClick={handleShow} >Apply</Button>
                                                        <Modal show={show} onHide={handleClose}>
                                                            <Modal.Header closeButton>
                                                                <Modal.Title>Application Form</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <Form className="form" autoComplete="off" onSubmit={handleapply} >
                                                                    <Container>
                                                                        <Row>
                                                                            <Col>

                                                                                <Form.Row>
                                                                                    <Col>
                                                                                        <Form.Label>First Name</Form.Label>
                                                                                        <Form.Control placeholder="First name" onChange={(e) => setDetails({ ...details, firstName: e.target.value })} required />
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Form.Label>Last Name</Form.Label>
                                                                                        <Form.Control placeholder="Last name" onChange={(e) => setDetails({ ...details, lastName: e.target.value })} required />
                                                                                    </Col>
                                                                                </Form.Row>
                                                                                <Form.Group controlId="formGroupEmail">
                                                                                    <Form.Label>Email Id</Form.Label>
                                                                                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setDetails({ ...details, email: e.target.value })} required />
                                                                                </Form.Group>
                                                                                <Form.Group controlId="formGroupPassword">
                                                                                    <Form.Label>CompanyName</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Enter the companyname your applying" onChange={(e) => setDetails({ ...details, companyname: e.target.value })} required />
                                                                                </Form.Group>
                                                                                <Form.Group controlId="formGroupEmail">
                                                                                    <Form.Label>Phone Number</Form.Label>
                                                                                    <Form.Control type="text" placeholder="Enter Phone Number" onChange={(e) => setDetails({ ...details, phone: e.target.value })} required />
                                                                                </Form.Group>
                                                                                <Form.Row>
                                                                                    <Col>
                                                                                        <Form.Label>10th Mark in %</Form.Label>
                                                                                        <Form.Control placeholder="enter in %" onChange={(e) => setDetails({ ...details, sslc: e.target.value })} required />
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Form.Label>12th Mark in %</Form.Label>
                                                                                        <Form.Control placeholder="enter in %" onChange={(e) => setDetails({ ...details, hsc: e.target.value })} required />
                                                                                    </Col>
                                                                                </Form.Row>
                                                                                <Form.Row>
                                                                                    <Col>
                                                                                        <Form.Label>Degree</Form.Label>
                                                                                        <Form.Control placeholder="Example B.E or B.tech" onChange={(e) => setDetails({ ...details, degree: e.target.value })} required />
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Form.Label>College Name</Form.Label>
                                                                                        <Form.Control placeholder="enter colleg name" onChange={(e) => setDetails({ ...details, collegename: e.target.value })} required />
                                                                                    </Col>
                                                                                </Form.Row>
                                                                                <Form.Row>
                                                                                    <Col>
                                                                                        <Form.Label>CGPA</Form.Label>
                                                                                        <Form.Control placeholder="CGPA" onChange={(e) => setDetails({ ...details, cgpa: e.target.value })} required />
                                                                                    </Col>
                                                                                    <Col>
                                                                                        <Form.Label>Skills</Form.Label>
                                                                                        <Form.Control placeholder="enter skills" onChange={(e) => setDetails({ ...details, skills: e.target.value })} required />
                                                                                    </Col>
                                                                                </Form.Row>

                                                                                <Button variant="primary" type="submit" size="sm">
                                                                                    Submit
                                                                                </Button>
                                                                            </Col>
                                                                        </Row>
                                                                    </Container>

                                                                </Form>




                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Container fluid="md">
                                                                    <Row>
                                                                        <Col md={{ span: 6, offset: 3 }}><Alert variant='info'>
                                                                            {applyMessage}
                                                                        </Alert></Col>
                                                                    </Row>
                                                                </Container>
                                                                <Button variant="secondary" onClick={handleClose}>
                                                                    Close
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Modal>
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

export default Posts;
