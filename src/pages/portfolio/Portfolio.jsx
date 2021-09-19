import React from 'react'
import { portfolioScreenConfig } from 'config/Config'
import {
  PortfolioContainer,
  PortfolioTitle,
  PortfolioList,
} from './Portfolio.style'

import { ContentContainer } from '../Landing/App.style'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <ContentContainer>
      <PortfolioContainer>
        <PortfolioTitle>{portfolioScreenConfig.title}</PortfolioTitle>

        <PortfolioList>
          {portfolioScreenConfig.portfolios.map((portfolio, index) => (
            <PortfolioCard title="1" key={index} portfolio={portfolio} />
          ))}
        </PortfolioList>
      </PortfolioContainer>
    </ContentContainer>
  )
}

export default Portfolio
