import React, { useState } from 'react';
import { Form, Col, Container, Row, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert'
import axios from "axios";






function Jobpost() {

    const [postmessage, setPostMessage] = useState("");
    const [job, setJob] = useState({ CompanyName: "", Place: "", image: "", Qulaification: "", Designation: "", YearOfPass: "", AnnualSalary: "" });


    const handlejob = (e) => {
        e.preventDefault();
        const { CompanyName, Place, image, Qulaification, Designation, YearOfPass, AnnualSalary } = job;
        setPostMessage(<Spinner animation="border" variant="success" />);
        if ((CompanyName !== "") && (Place !== "") && (Qulaification !== "") && (Designation !== "") && (YearOfPass !== "") && (AnnualSalary !== "")) {
            axios.post("https://colegedetails.herokuapp.com/create", {
                CompanyName: CompanyName,
                Place: Place,
                image: image,
                Qulaification: Qulaification,
                Designation: Designation,
                YearOfPass: YearOfPass,
                AnnualSalary: AnnualSalary
            }).then((res) => {
                if (res.status === 200) {
                    setPostMessage(`sucessfully posted ✓`);
                }
            }, (err) => {
                if (err) {
                    setPostMessage("Post Later on due to some error❌")
                }
            })
        } else {
            setPostMessage(`please fill all the fileds required `)
        }

    }
    return (
        <div>
            <Form className="form" autoComplete="off" onSubmit={handlejob} >
                <Container mt-3>
                    <Row>
                        <Col>

                            <Form.Row>
                                <Col>
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control placeholder="Company name" onChange={(e) => setJob({ ...job, CompanyName: e.target.value })} required />
                                </Col>
                                <Col>
                                    <Form.Label>Place</Form.Label>
                                    <Form.Control placeholder="place" onChange={(e) => setJob({ ...job, Place: e.target.value })} required />
                                </Col>
                            </Form.Row>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Qualification</Form.Label>
                                <Form.Control type="text" placeholder="Enter Qualification" onChange={(e) => setJob({ ...job, Qulaification: e.target.value })} required />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" placeholder="Enter role" onChange={(e) => setJob({ ...job, Designation: e.target.value })} required />
                            </Form.Group>

                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Year Of Pass</Form.Label>
                                <Form.Control type="text" placeholder="Enter passout year" onChange={(e) => setJob({ ...job, YearOfPass: e.target.value })} required />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Annual Salary</Form.Label>
                                <Form.Control type="text" placeholder="Enter ctc" onChange={(e) => setJob({ ...job, AnnualSalary: e.target.value })} required />
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
                            {postmessage}
                        </Alert></Col>
                    </Row>
                </Container>
            </Form>

        </div>
    )
}

export default Jobpost;
