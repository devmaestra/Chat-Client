import React, { useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import FullButton from '../../buttons/FullButton';
import { useNavigate } from 'react-router-dom';


function Signup(props) {
    
    const userRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const user = userRef.current.value; 
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        let bodyObj = JSON.stringify({
            user: user,
            email: email,
            password: password
        })

        const url = `http://localhost:4005/user/signup`;

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {

            const response = await fetch(url, requestOptions);
            const data = await response.json();
        
            if(data.message === "Success!") {
                props.updateToken(data.token)
                navigate('/');
            } else {
                alert(data.message)
            }

        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h2>Signup</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup className="inputBubble" floating>
                    <Input
                        innerRef={userRef}
                        placeholder='Your Name Here (FIRST, LAST)'
                        name='userName'
                        type='text'
                    />
                    <Label for='userNameSignup'>User Name</Label>
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        innerRef={emailRef}
                        type='email'
                        placeholder='user@email.com'
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        innerRef={passwordRef}
                        type='password'
                    />
                </FormGroup>
                <FullButton>
                    <Button type='submit'
                    onClick={() => navigate('/login')}>Submit</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default Signup