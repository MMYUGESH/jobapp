import React, { useState } from 'react';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';
import Esignup from './Esignup';
import Esignin from './Esignin';
import './login.css';
function Elogin() {
    const [project, setProject] = useState(<Esignup />);
    const onClickHandlersignup = () => {
        setProject(<Esignup />);
    }

    const onClickHandlerlogin = () => {
        setProject(<Esignin />);
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

export default Elogin;
