import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Signup from './Signup';
import Signin from './Signin';
import './login.css';
function Login() {
    const [project, setProject] = useState(<Signup />);
    const onClickHandlersignup = () => {
        setProject(<Signup />);
    }

    const onClickHandlerlogin = () => {
        setProject(<Signin />);
    }

    return (
        <div className="position">
            <Container className="login_margin">
                <Row xs={2} md={4} lg={6}>
                    <Col><Button variant="outline-primary" onClick={onClickHandlersignup}>SIGNUP</Button>
                        <Button variant="outline-success" onClick={onClickHandlerlogin}>LOGIN</Button>
                    </Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col>{project}</Col>
                </Row>
            </Container>


        </div>
    )
}

export default Login;
