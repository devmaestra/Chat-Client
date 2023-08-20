import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

function Logout({setSessionToken}) {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        setSessionToken('')
        navigate('/')
    }

    const style = {
        float: 'right',
        margin: '.5em'
    }

    return (
        <>
            <Button
                color='danger'
                outline
                style={style}
                onClick={logout}
            >Logout
            </Button>
        </>
    )
}

export default Logout