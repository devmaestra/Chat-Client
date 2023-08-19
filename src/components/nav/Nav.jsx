import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

export default function nav() {
  return (
    <>
      <Navbar
        className="nav-bar"
        color="secondary"
        dark>
        <NavbarBrand href="/">
          Swolemates
        </NavbarBrand>
      </Navbar>
    </>
  )
}
