import styled, { keyframes } from 'styled-components'

const Constants = {
  PORTRAIT_WIDTH: '800px',
  LANDSCAPE_WIDTH: '801px',
  FONT_AWESOME_ICON_MEDIUM_SIZE: 24,
}

const LandingPageContainer = styled.div`
  display: grid;
  height: 100vh;

  overflow-x: hidden;

  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    grid-template-rows: auto 1fr;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    grid-template-columns: auto 1fr;
  }
`

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.navbar};
`

const slideLeftFromRightKeyFrameAnimation = keyframes`
0% { opacity: 0.1; right: -10rem; }
10% { opacity: 0.2; right: -9rem; }
20% { opacity: 0.3; right: -8rem; }
30% { opacity: 0.4; right: -7rem; }
50% { opacity: 0.5; right: -6rem; }
50% { opacity: 0.6; right: -5rem; }
60% { opacity: 0.7; right: -4rem; }
70% { opacity: 0.8; right: -3rem; }
80% { opacity: 0.9; right: -2rem; }
90% { opacity: 0.95; right: -1rem; }
100% { opacity: 1; right: 0rem; }
`

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;

  position: relative;

  animation: ${slideLeftFromRightKeyFrameAnimation} 0.7s ease-in-out;

  overflow-y: scroll;
`

export { LandingPageContainer, NavbarContainer, ContentContainer, Constants }
