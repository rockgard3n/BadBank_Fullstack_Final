import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import '../App.css'

function NavBar(){
    return(
        <Navbar className="color-nav" expand="lg">
            <Container>
                <Navbar.Brand>
                    The Bad Bank
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                        <LinkContainer to="createaccount"><Nav.Link>Create Account</Nav.Link></LinkContainer>
                        <LinkContainer to="login"><Nav.Link>Login</Nav.Link></LinkContainer>
                        <LinkContainer to="deposit"><Nav.Link>Deposit</Nav.Link></LinkContainer>
                        <LinkContainer to="withdraw"><Nav.Link>Withdraw</Nav.Link></LinkContainer>
                        <LinkContainer to="alldata"><Nav.Link>All Data</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
    
}

export default NavBar;