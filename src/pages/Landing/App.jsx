import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { getTheme } from '../../theme/Themes'
import Navbar from '../../components/navbar/Navbar'
import About from '../about/About'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Portfolio from '../portfolio/Portfolio'
import { LandingPageContainer, NavbarContainer } from './App.style'

const App = () => {
  const [themeMode, setThemeMode] = useState('light')
  const toggleTheme = () => {
    setThemeMode((themeMode) => (themeMode === 'dark' ? 'light' : 'dark'))
  }
  const currentTheme = getTheme(themeMode)
  return (
    <ThemeProvider theme={currentTheme}>
      <LandingPageContainer>
        <Router>
          <NavbarContainer>
            <Navbar onChangeTheme={toggleTheme} theme={currentTheme} />
          </NavbarContainer>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home theme={currentTheme} />
            </Route>
          </Switch>
        </Router>
      </LandingPageContainer>
    </ThemeProvider>
  )
}

export default App
