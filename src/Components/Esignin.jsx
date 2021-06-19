import React, { useState } from 'react';
import { Form, Col, Container, Row, Button, variant } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'
import axios from "axios";
import "./signup.css"
function Esignin() {

    const [login, setLogin] = useState([{ eamil: "", password: "", }]);
    const [loginMesage, setLoginMessage] = useState("");



    const loginHandle = (e) => {
        e.preventDefault();

        setLoginMessage(<Spinner animation="border" variant="success" />)
        const logindata = login;
        if ((logindata.email !== "") && (logindata.password !== "")) {
            axios.post("https://recuriter.herokuapp.com/login", logindata)
                .then((res) => {
                    if (res.status === 200) {
                        sessionStorage.setItem("Employerloggedin", true)
                        setLoginMessage("login is successfull !!!")
                    }

                }, (err) => {
                    setLoginMessage("login failed !!! Don't have an account then Signup");
                })

        } else {
            setLoginMessage("All the field has to be filled")
        }


    }




    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col>
                        <Form className="form" autoComplete="off" onSubmit={loginHandle}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setLogin({ ...login, email: e.target.value })} required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setLogin({ ...login, password: e.target.value })} required />
                            </Form.Group>

                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}><Alert variant='success'>
                        {loginMesage}
                    </Alert></Col>
                </Row>
            </Container>

        </div>
    )
}

export default Esignin;
