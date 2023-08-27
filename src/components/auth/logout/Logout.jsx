import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import FullButton from '../../buttons/FullButton';

function Logout({setSessionToken}) {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        setSessionToken('') 
        navigate('/')
    }

    const style = {
        float: 'right',
        margin: '5em'
    }

    if (setSessionToken === ('token')) {
        return (
            <>
                <FullButton>
                    <Button
                        color='danger'
                        outline
                        style={style}
                        onClick={logout}
                    >Logout
                    </Button>
                </FullButton>
            </>
    )
    } else {
        const style = null;
    }
}

export default Logout