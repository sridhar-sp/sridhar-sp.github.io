import styled, { keyframes } from 'styled-components'

const LandingPageContainer = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 0.8fr;
  height: 100vh;
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.colors.background};
`

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.navbar};
`

const slideLeftFromRightKeyFrameAnimation = keyframes`
0% { opacity: 0; right: -10rem; }
100% { opacity: 0.9; right: 0rem; }
`

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;

  position: relative;

  animation: ${slideLeftFromRightKeyFrameAnimation} 1s ease-in-out;

  overflow-y: scroll;
`

export { LandingPageContainer, NavbarContainer, ContentContainer }
