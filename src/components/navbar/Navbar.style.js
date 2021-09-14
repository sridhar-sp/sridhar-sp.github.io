import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #eee;
`

const NavList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;
  margin-left: 4rem;
`

const RouteLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  :hover {
    letter-spacing: 1px;
  }
`

export { Navbar, RouteLink, NavList }
