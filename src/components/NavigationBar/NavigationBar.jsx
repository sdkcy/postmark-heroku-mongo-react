/**
 * DemoApp
 * NavigationBar.js
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import {Nav, Navbar} from "react-bootstrap";
import React from "react";
import {route} from "../../constants/app";

function NavigationBar(props) {
    return (
        <Navbar collapseOnSelect={true} bg="light" expand="sm">
            <Navbar.Toggle area-controls="responsive-nav-bar"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link eventKey={1} onClick={() => props.onNavigate(route.INBOX)}>
                        Inbox
                        <img
                            alt=""
                            src="/assets/refresh.svg"
                            width="18"
                            height="18"
                        />
                    </Nav.Link>
                    <Nav.Link eventKey={2} onClick={() => props.onNavigate(route.SENT_BOX)}>Sent</Nav.Link>
                    <Nav.Link eventKey={3} onClick={() => props.onNavigate(route.NEW_EMAIL)}>New Email</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
