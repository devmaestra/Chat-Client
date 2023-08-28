import React, { useState } from 'react'
import Signup from './signup/Signup'
import Login from './login/Login';
import { Col, Row } from 'reactstrap';
import Logout from './logout/Logout';

function Auth(props) {

    const [button] = useState('Create Account')

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
}

export default Auth