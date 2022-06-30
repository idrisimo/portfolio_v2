import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap/'
import {HashLink as Link} from 'react-router-hash-link'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export const NavBar = () => {
    return (
        <Navbar bg='dark' variant="dark" expand='lg' sticky="top">
            <Container>
                <Navbar.Brand href="#">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to='#About'>About</Link>
                        <Link className="nav-link" to='#Projects'>Projects</Link>
                        <Link className="nav-link" to='#Contact'>Contact</Link>
                        <Link className="nav-link" to='/reddit'>reddit</Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
