/**
 * DemoApp
 * MailDetail.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import {Card, Modal, ListGroup} from "react-bootstrap";

class MailDetail extends React.Component {
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
        if (!this.props.data) {
            return <React.Fragment/>;
        }
        const {From, To, Subject, TextBody} = this.props.data;
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <Card.Text>From: <span className="text-muted">{From}</span></Card.Text>
                                    <Card.Text>To: <span className="text-muted">{To}</span></Card.Text>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card.Text>Subject: <span className="text-muted">{Subject}</span></Card.Text>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Card.Text style={{minHeight: 200}}>
                                        {TextBody}
                                    </Card.Text>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        );
    }
}

export default MailDetail;
