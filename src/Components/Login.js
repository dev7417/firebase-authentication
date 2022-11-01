import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from '../Firebase'
import './contactForm.css'
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material'

export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const [show, setShow] = useState(false)
    const [status, setStatus] = useState({
        status: true,
        type: '',
        msg: ''
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        // console.log(email, password)
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password);
            console.log(result);
            setStatus({ status: true, type: 'success', msg: 'data submitted successfully' });


        } catch (error) {
            console.log(error.FirebaseError);
            setStatus({ status: true, type: 'error', msg: error.FirebaseError })
        }
    }

    return (

        <>
            <div className='container'>
                <div className='login-form'>
                    <div className='m-form'>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{ fontWeight: 'bold', fontSize: '25px', fontFamily: 'Nunito Sans' }}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label style={{ fontWeight: 'bold', fontSize: '25px', fontFamily: 'Nunito Sans' }}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mx-auto d-flex' style={{ fontWeight: 'bold' }}>
                                Submit
                            </Button>
                        </Form>
                    </div>

                </div>
            </div>
            <Alert severity={status.type}>{status.msg}</Alert>



        </>
    )
}
