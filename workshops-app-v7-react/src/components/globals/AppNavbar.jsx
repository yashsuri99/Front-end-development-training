import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { isAuthenticated } from "../../services/auth";

const AppNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Workshops App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {isAuthenticated() ? (
                        <Nav>
                            {/* <a href="/xyz">Some link</a> */}
                            {/* use this in meeting app in place of links */}
                            {/*<Link to="/xyz">Some Link</Link>*/}
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/workshops">
                                Workshops List
                            </Nav.Link>
                            <Nav.Link as={Link} to="/workshops/add">
                                Add a workshop
                            </Nav.Link>
                        </Nav>
                    ) : (
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
