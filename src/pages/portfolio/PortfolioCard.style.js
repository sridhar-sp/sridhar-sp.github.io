import styled from 'styled-components'
import { Constants } from 'pages/Landing/App.style'

const PortfolioCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    width: 100%;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    width: 49%;
  }
`

const PortfolioImage = styled.div`
  min-height: 15rem;
  height: 75%;
  width: 100%;

  background: url('https://kavenyou.com/wp-content/uploads/2017/07/May-2-2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`

const PortfolioDescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  background: ${({ theme }) => theme.colors.navbar};
  padding: 1rem 2rem;
`

const PortfolioTitle = styled.h3`
  color: ${({ theme }) => theme.colors.onBackground};
  text-decoration: none;
`
const PortfolioShortDescription = styled.h4`
  /* overflow: hidden; */
  color: ${({ theme }) => theme.colors.onBackground};
  text-decoration: none;
`

export {
  PortfolioCardContainer,
  PortfolioImage,
  PortfolioDescriptionContainer,
  PortfolioTitle,
  PortfolioShortDescription,
}
