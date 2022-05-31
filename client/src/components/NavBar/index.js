import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap/'
import {HashLink as Link} from 'react-router-hash-link'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export const NavBar = () => {
    return (
        <Navbar bg='dark' variant="dark" expand='lg' sticky="top">
            <Container>
                <Navbar.Brand href="#"> Idris Silva</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Projects</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                        {/* <Link to='#About'>About</Link>
                        <Link to='#Projects'>Projects</Link>
                        <Link to='#Contact'>Contact</Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
