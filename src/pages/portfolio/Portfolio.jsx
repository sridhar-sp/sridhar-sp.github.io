import React from 'react'
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
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioList>
          <PortfolioCard title="1" />
          <PortfolioCard title="2" />
          <PortfolioCard title="3" />
          <PortfolioCard title="4" />
          <PortfolioCard title="5" />
          <PortfolioCard title="6" />
        </PortfolioList>
      </PortfolioContainer>
    </ContentContainer>
  )
}

export default Portfolio
