/**
 * DemoApp
 * NewMail.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import {Button, Form, Modal} from "react-bootstrap";

class NewMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            To: "",
            Subject: "",
            TextBody: ""
        };
    }

    onFormControlChange(formControl, value) {
        this.setState({[formControl]: value});
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>New Mail</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formGridEmail">
                            <Form.Control type="email"
                                          placeholder="To"
                                          onChange={(event) => this.onFormControlChange("To",
                                              event.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control type="text"
                                          placeholder="Subject"
                                          onChange={(event) => this.onFormControlChange("Subject",
                                              event.target.value)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Control as="textarea"
                                          placeholder="Email"
                                          rows={6}
                                          onChange={(event) => this.onFormControlChange("TextBody",
                                              event.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    <Button variant="primary" onClick={() => {
                        this.props.onSendEmail(this.state);
                        this.props.onHide();
                    }}>Send Email</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default NewMail;
