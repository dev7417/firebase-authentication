import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './contactForm.css'
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(email, password)
    }
    return (
        <>
            <div className='container'>
                <div className='login-form'>
                    <div className='m-form'>
                        <Form onClick={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{fontWeight:'bold', fontSize:'25px', fontFamily:'Nunito Sans'}}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{fontWeight:'bold', fontSize:'25px', fontFamily:'Nunito Sans'}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mx-auto d-flex' style={{fontWeight:'bold'}}>
                                Submit
                            </Button>
                        </Form>
                    </div>

                </div>

            </div>


        </>
    )
}
