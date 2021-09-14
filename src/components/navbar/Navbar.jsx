import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, RouteLink, NavList } from './Navbar.style'

const Navigationbar = () => {
  return (
    <Navbar>
      <NavList>
        <RouteLink to="/">Home</RouteLink>
        <RouteLink to="/about">About</RouteLink>
        <RouteLink to="/portfolio">Portfolio</RouteLink>
      </NavList>
    </Navbar>
  )
}

export default Navigationbar
