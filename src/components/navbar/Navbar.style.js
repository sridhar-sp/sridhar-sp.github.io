import styled from "styled-components";
import { Link } from "react-router-dom";
import { Constants } from "pages/Landing/App.style";
import { Body1 } from "common/styles";

const ThemeModeIcon = styled.div`
  justify-self: flex-end;
  margin: 1rem;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    align-self: center;
  }
`;

const NavBar = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    flex-direction: row;
  }

  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    flex-direction: row;
  }
`;

const NavList = styled.div`
  display: flex;
  flex-wrap: wrap;

  flex: 1;
  justify-content: center;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    flex-direction: row;
    column-gap: 0.9rem;
    min-height: 5rem;
    width: 100%;
    align-content: center; //main-axis
    justify-content: space-around;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    flex-direction: column;
    row-gap: 0.9rem;
    min-width: 14rem; // 1 rem padding in Theme Icon. Total 15 rem left side navigation bar width
    margin-left: 5rem;
  }
`;

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
    letter-spacing: 0.05rem;
  }
  transition: letter-spacing 0.1s ease-in-out;

  color: ${({ theme }) => theme.colors.primaryText};

  /* color: ${({ theme, isSelected }) => (isSelected ? theme.colors.primaryText : theme.colors.secondaryText)}; */

  ${({ isSelected }) => isSelected && `font-weight: bold;`}
`;

export const RouteLinkText = styled(Body1)``;

export { RouteLink, NavList, ThemeModeIcon, NavBar };
