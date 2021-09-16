import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.9rem;
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
    letter-spacing: 0.1rem;
  }
  transition: letter-spacing 0.1s ease-in;

  color: ${({ theme }) => theme.colors.primaryText};

  /* color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primaryText : theme.colors.secondaryText}; */

  ${({ isSelected }) => isSelected && `font-weight: bold;`}
`

export { RouteLink, NavList }
