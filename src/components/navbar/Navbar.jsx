import React, { useState } from 'react'
import { NavbarContainer } from '../../pages/Landing/App.style'
import { RouteLink, NavList, ThemeModeIcon, NavBar } from './Navbar.style'
import { BiSun, BiMoon } from 'react-icons/bi'

const Navigationbar = ({ onChangeTheme = () => {}, theme }) => {
  const [selectedRoute, setSelectedRoute] = useState('/')

  const Route = {
    Home: '/',
    About: '/about',
    Portfolio: '/portfolio',
  }

  const getThemeIcon = (isDarkTheme, fillColor, iconSize) => {
    if (isDarkTheme) {
      return <BiSun fill={fillColor} size={iconSize} />
    } else {
      return <BiMoon fill={fillColor} size={iconSize} />
    }
  }

  return (
    <NavbarContainer>
      <NavBar>
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
        </NavList>
        <ThemeModeIcon onClick={() => onChangeTheme()}>
          {getThemeIcon(theme.theme === 'dark', theme.colors.onBackground, 24)}
        </ThemeModeIcon>
      </NavBar>
    </NavbarContainer>
  )
}

export default Navigationbar
