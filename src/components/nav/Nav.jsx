import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Logout from "../auth/logout/Logout";

export default function Nav() {

  const [ sessionToken, setSessionToken ] = useState('');
  
  // console.log('Token: ', sessionToken)

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])  

  return (
    <>
        <Navbar 
            className="nav-bar"
            color="secondary" 
            dark>
            <NavbarBrand 
            href="/">Chatter Bug
            </NavbarBrand>
            <NavbarBrand>
              {
              sessionToken !== '' ?
              <Logout setSessionToken={setSessionToken} /> : null
              }
            </NavbarBrand>
        </Navbar>
    </>
  )
}
