import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import './login.css';
import Details from './Details';
import Jobpost from './Jobpost';

function Recruiters() {
    const [show, setShow] = useState(<Details />);
    const onClickHandlerDetails = () => {
        setShow(<Details />);
    }

    const onClickHandlerPost = () => {
        setShow(<Jobpost />);
    }

    return (
        <div className="position">

            <Container className="login_margin mt-4 mb-4">
                <Row xs={2} lg={9}>
                    <Col><Button variant="outline-primary" onClick={onClickHandlerDetails}>Candidates Application</Button>
                        <Button variant="outline-success" onClick={onClickHandlerPost}>Post JobApplication</Button>
                    </Col>
                </Row>
                <Row xs={1} className="mt-2" >
                    <Col>{show}</Col>
                </Row>
            </Container>


        </div>
    )
}

export default Recruiters;
