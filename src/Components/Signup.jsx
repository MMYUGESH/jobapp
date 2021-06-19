import React, { useState } from 'react';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'
import axios from "axios";
import './signup.css'
function Signup() {

    const [signUpMessage, setSignUpMessage] = useState("");
    const [signUp, setSignUp] = useState({ firstName: "", lastName: "", email: "", password: "", phone: "", position: "" });


    const handleSignUp = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, phone, position } = signUp;
        setSignUpMessage(<Spinner animation="border" variant="success" />);
        if ((email !== "") && (password !== "") && (firstName !== "") && (lastName !== "") && (password.length >= 4) && (phone !== "") && (position !== "")) {
            axios.post("https://hoopersignup.herokuapp.com/signup", {
                email: email,
                firstName: firstName,
                lastName: lastName,
                password: password,
                phone: phone,
                position: position
            }).then((res) => {
                if (res.status === 200) {
                    setSignUpMessage(`sucessfully signed ✓`);
                }
            }, (err) => {
                if (err) {
                    setSignUpMessage("User already exist ❌")
                }
            })
        } else {
            setSignUpMessage(`please fill all fileds password length greater than 5 `)
        }

    }
    return (
        <div>
            <Form className="form" autoComplete="off" onSubmit={handleSignUp} >
                <Container mt-3>
                    <Row>
                        <Col>

                            <Form.Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control placeholder="First name" onChange={(e) => setSignUp({ ...signUp, firstName: e.target.value })} required />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="Last name" onChange={(e) => setSignUp({ ...signUp, lastName: e.target.value })} required />
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setSignUp({ ...signUp, email: e.target.value })} required />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setSignUp({ ...signUp, password: e.target.value })} required />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone Number" onChange={(e) => setSignUp({ ...signUp, phone: e.target.value })} required />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>position</Form.Label>
                                <Form.Control as="select" onChange={(e) => setSignUp({ ...signUp, position: e.target.value })} className="custom-select">
                                    <option>Choose...</option>
                                    <option>Candidate</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" size="lg">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container fluid="md">
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}><Alert variant='info'>
                            {signUpMessage}
                        </Alert></Col>
                    </Row>
                </Container>
            </Form>

        </div>
    )
}

export default Signup;
