import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, Outlet } from 'react-router-dom';
import '../App.css'


export default function Header() {
  return (
    <>

      <Navbar bg="dark" expand="lg" className='navbar'>
        <Container>
          <Navbar.Brand href="#home" style={{ color: '#fff', fontWeight: 'bold' }}>Login-Auth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="#home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} className='link'>Home</NavLink>
              <NavLink to="" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} className='link'>Link</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}
