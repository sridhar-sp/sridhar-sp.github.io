import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import About from '../about/About'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Portfolio from '../portfolio/Portfolio'
import { LandingPageContainer } from './App.style'

const App = () => {
  return (
    <LandingPageContainer>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </LandingPageContainer>
  )
}

export default App
