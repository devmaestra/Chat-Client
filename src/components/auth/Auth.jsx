import React, { useState } from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import { Button, Col, Container, Row } from 'reactstrap';
import Logout from './logout/Logout';

function Auth(props) {
    
    const [button, setButton] = useState('Signup')

    const swapForm = () => {
        button === "Login" ?
            setButton('Signup') :
            setButton('Login')
    }

    const displayForm = () => {
        return (
            button === "Login" ?
                <Row>
                    <Col md="4">
                        <Signup
                            updateToken={props.updateToken}
                        />
                    </Col>
                </Row> :
                <Row>
                    <Col md="4">
                        <Login
                            updateToken={props.updateToken}
                        />
                    </Col>
                    <Col md="4">
                        <Logout />
                    </Col>
                </Row>
        )
    }

    return (
        <>
            <Button onClick={swapForm} color='dark'>{button}</Button>
            <Container>
                {displayForm()}
            </Container>
        </>
    )
}

export default Auth