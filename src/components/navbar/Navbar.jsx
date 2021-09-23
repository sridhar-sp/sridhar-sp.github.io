import React, { useState } from 'react'
import { RouteLink, NavList, ThemeModeIcon, NavBar } from './Navbar.style'
import { BiSun, BiMoon } from 'react-icons/bi'
import { useLocation } from 'react-router-dom'

const Navigationbar = ({ onChangeTheme = () => {}, theme }) => {
  const location = useLocation()
  const [selectedRoute, setSelectedRoute] = useState(location.pathname)

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
  )
}

export default Navigationbar
