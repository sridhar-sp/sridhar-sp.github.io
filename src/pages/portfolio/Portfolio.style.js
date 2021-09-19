import styled from 'styled-components'
import { Constants } from 'pages/Landing/App.style'

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% 5%;
`

const PortfolioTitle = styled.h2`
  color: ${({ theme }) => theme.colors.onBackground};
  text-decoration: none;
  margin: 0;
  margin-bottom: 1rem;
`

const PortfolioList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  row-gap: 2rem;

  justify-content: space-between;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    flex-direction: column;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    flex-direction: row;
  }
`

export { PortfolioContainer, PortfolioTitle, PortfolioList }
