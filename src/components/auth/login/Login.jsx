import React, { useRef } from 'react';
import { FormGroup, Input, Form, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import FullButton from '../../buttons/FullButton';

function Login({ updateToken }) {

    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let body = JSON.stringify({
            email, password
        })

        const url = 'http://localhost:3000/user/login';

        try {

            const res = await fetch(url, {
                method: 'POST',
                headers: new Headers({
                    "Content-Type": 'application/json'
                }),
                body: body
            })

            const data = await res.json();

            if (data.message === 'Success!') {
                updateToken(data.token)
                navigate('/room')
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
                        placeholder='passsword'
                    />
                </FormGroup>
                <FullButton>
                    <Button type='submit'>Login</Button>
                </FullButton>
                <FullButton>
                    <Button type='submit'>create account</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default Login