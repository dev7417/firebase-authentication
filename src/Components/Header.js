import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../App.css'
import { auth } from '../Firebase';


export default function Header() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  }, [])
  const navigate = useNavigate()
  const loginData = useSelector((state)=> state.dataReducer.data)
  console.log("=================================>", loginData)
 
   
  
  return (
    <>
      <Navbar bg="dark" expand="lg" className='navbar'>
        <Container>
          <Navbar.Brand><NavLink style={{ color: '#fff', fontWeight: 'bold', textDecoration:'none' }} to='/'>Login-Auth</NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="#home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} className='link'>Home</NavLink>
              <NavLink to="/login" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} className='link'>Link</NavLink>
              <NavLink to="" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }} className='link'>{loginData.email}</NavLink>
             <div className='d-flex mx-auto'>
              {
                user?
              <NavLink to="" className='mx-auto'><button  className="btn btn-danger" onClick={()=>{auth.signOut();navigate('/')}}>Logout</button></NavLink>
              :
              <>
                <NavLink to="" className='mx-auto'><button  className="btn btn-success">Login</button></NavLink>
              <NavLink to="" className='mx-auto'><button  className="btn btn-success">Signup</button></NavLink>
              </> 
}
             </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}
