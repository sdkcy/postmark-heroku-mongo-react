/**
 * DemoApp
 * MailBox.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import {Container, ListGroup} from "react-bootstrap";
import {route} from "../../constants/app";

class MailBox extends React.Component {
    renderList() {
        const list = this.props.emails || [];
        return list.map((item, index) => {
            return (
                <ListGroup.Item key={"Email_" + index} onClick={() => this.props.onMailClick(item)}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div>{this.props.route === route.INBOX ? item.From : item.To}</div>
                        <div style={{fontSize: 13, color: "#BDBDBD"}}>{item.Subject}</div>
                    </div>
                </ListGroup.Item>
            );
        });
    }

    render() {
        return (
            <Container style={{marginLeft: 0, marginRight: 0}}>
                <ListGroup variant="flush">
                    {this.renderList()}
                </ListGroup>
            </Container>
        );
    }
}

export default MailBox;
