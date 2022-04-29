import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = ({fixed}) => {

 return (
    <Navbar expand="lg" className='navbar-color' fixed={fixed}>
        <Container>
            <Navbar.Brand href="#">CALYDO</Navbar.Brand>
            <Nav className='side-bar'>
                <i className="bi bi-justify"></i>&nbsp;&nbsp;
                <i className="bi bi-printer"></i>
            </Nav>
        </Container>
    </Navbar>
  );
}