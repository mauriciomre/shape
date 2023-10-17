import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Diseño Web</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
