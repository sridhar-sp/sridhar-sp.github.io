import styled from 'styled-components'
import { Constants } from 'pages/Landing/App.style'
import { Anchor } from 'components/common/Common.style'

const PortfolioCardContainer = styled(Anchor)`
  display: flex;
  flex-direction: column;

  height: auto;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
      rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  }

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    width: 100%;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    width: 49%;
  }
`

const PortfolioImage = styled.div`
  min-height: 25rem;
  width: 100%;

  background: url(${({ imageUrl }) => imageUrl});

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

const PortfolioDescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.navbar};
  padding: 1rem 2rem;
`

const PortfolioTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primaryText};
  word-wrap: break-word;
`
const PortfolioShortDescription = styled.h4`
  color: ${({ theme }) => theme.colors.secondaryText};
  word-wrap: break-word;
  white-space: pre-line;
  font-weight: 600;
`

export {
  PortfolioCardContainer,
  PortfolioImage,
  PortfolioDescriptionContainer,
  PortfolioTitle,
  PortfolioShortDescription,
}
