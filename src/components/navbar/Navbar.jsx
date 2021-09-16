import React, { useState } from 'react'
import { NavbarContainer } from '../../pages/Landing/App.style'
import { RouteLink, NavList } from './Navbar.style'

const Navigationbar = ({ onChangeTheme = () => {} }) => {
  const [selectedRoute, setSelectedRoute] = useState('/')

  const Route = {
    Home: '/',
    About: '/about',
    Portfolio: '/portfolio',
  }

  return (
    <NavbarContainer>
      <NavList>
        <RouteLink
          to={Route.Home}
          onClick={() => setSelectedRoute(Route.Home)}
          isSelected={Route.Home === selectedRoute}
        >
          Home
        </RouteLink>
        <RouteLink
          to={Route.About}
          onClick={() => setSelectedRoute(Route.About)}
          isSelected={Route.About === selectedRoute}
        >
          About
        </RouteLink>
        <RouteLink
          to={Route.Portfolio}
          onClick={() => setSelectedRoute(Route.Portfolio)}
          isSelected={Route.Portfolio === selectedRoute}
        >
          Portfolio
        </RouteLink>
        <button onClick={() => onChangeTheme()}>Change theme</button>
      </NavList>
    </NavbarContainer>
  )
}

export default Navigationbar
