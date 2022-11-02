import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css'


export default function Header() {
  const loginData = useSelector((state)=> state.dataReducer.data)
  console.log("=================================>", loginData)

  return (
    <>
      <Navbar bg="dark" expand="lg" className='navbar'>
        <Container>
          <Navbar.Brand href="/" style={{ color: '#fff', fontWeight: 'bold' }}>Login-Auth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="#home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} className='link'>Home</NavLink>
              <NavLink to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} className='link'>Link</NavLink>
              <NavLink to="" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} className='link'>{loginData.email}</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}
