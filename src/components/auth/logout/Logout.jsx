import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import FullButton from '../../buttons/FullButton';

function Logout({setSessionToken}) {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        setSessionToken('') 
        navigate('/login')
    }

    if (setSessionToken === ('token')) {
        return (
            <>
                <FullButton>
                    <Button
                        color='danger'
                        outline
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