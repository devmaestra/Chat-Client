import React, { useRef } from 'react';
import { FormGroup, Input, Form, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import FullButton from '../../buttons/FullButton';

function Login({ updateToken }) {

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const routeChange = () => {
        let path = `/signup`;
        navigate(path);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const url = 'http://localhost:4005/user/login';

        try {

            const res = await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    "Content-Type": 'application/json'
                }),
                body: JSON.stringify({
                    email, password
                })
            })

            const data = await res.json();

            if (data.message === 'Success!') {
                updateToken(data.token)
                navigate('/room/')
            } else {
                alert(data.message);
            }

        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <>
            <h2>React Chat Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup >
                    <Input
                        innerRef={emailRef}
                        type='email'
                        placeholder='user@email.com'
                    />
                </FormGroup>
                <FormGroup >
                    <Input
                        innerRef={passwordRef}
                        type='password'
                        placeholder='password'
                    />
                </FormGroup>
                <FullButton>
                    <Button type='submit'>Login</Button>
                </FullButton>
                <FullButton>
                    <Button onClick={routeChange} color='dark'>Create Account</Button>
                </FullButton>

            </Form>
        </>
    )
}

export default Login