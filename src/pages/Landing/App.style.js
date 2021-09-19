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
0% { opacity: 0.1; right: -8rem; }
100% { opacity: 1; right: 0rem; }
`

const slideTopFromBottomKeyFrameAnimation = keyframes`
0% { opacity: 0.1; bottom: -8rem; }
100% { opacity: 1; bottom: 0rem; }
`

const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1rem;

  position: relative;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    animation: ${slideTopFromBottomKeyFrameAnimation} 0.5s ease-in;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    animation: ${slideLeftFromRightKeyFrameAnimation} 0.5s ease-in;
  }

  overflow-y: scroll;
  padding: 0;
`

export { LandingPageContainer, NavbarContainer, ContentContainer, Constants }
