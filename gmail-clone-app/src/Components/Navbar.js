import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const style= {
  textDecoration: "none",
  fontSize: "25px",
  marginLeft: "40%",
  color: "white"
}


export default function Navbars() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Gmail</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to='/' style={style}>Inbox</NavLink>
            <NavLink to='/outbox' style={style}>Outbox</NavLink>
            <NavLink to='/archive' style={style}>Archive</NavLink>
            <NavLink to='/starred' style={style}>Starred</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}
