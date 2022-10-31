import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './contactForm.css'
import { useState } from 'react';

export default function Contactform() {
  const [fName, setFName] = useState();
  const [lName, setLName] = useState();
  const [email, setEmail]  = useState();
  const [password, setPassword] = useState();


  const handleOnSubmit=(e)=>{ 
    e.preventDefault();
    console.log(fName,lName,email,password)

  }

  return (
    <div className='container'>
      <div className='main-form'>
        <div className='sec-form'>
        <Form  onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold', fontSize: '20px', fontFamily:'Nunito Sans' }}>first Name</Form.Label>
            <Form.Control type="text" placeholder="first name" style={{fontFamily:'Nunito Sans'}} onChange={(e)=>setFName(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold', fontSize: '20px', fontFamily:'Nunito Sans' }}>Last Name</Form.Label>
            <Form.Control type="text" placeholder="last name" onChange={(e)=>setLName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold', fontSize:'20px', fontFamily:'Nunito Sans' }}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: 'bold', fontSize:'20px', fontFamily:'Nunito Sans' }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Button variant="primary" type="submit" className='mx-auto d-flex' style={{fontWeight:'bold'}}>
            Submit
          </Button>
        </Form>
        </div>
       
      </div>
    </div>
  )
}
