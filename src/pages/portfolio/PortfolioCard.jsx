import React from 'react'
import {
  PortfolioCardContainer,
  PortfolioImage,
  PortfolioDescriptionContainer,
  PortfolioTitle,
  PortfolioShortDescription,
} from './PortfolioCard.style'

const PortfolioCard = ({ title }) => {
  return (
    <PortfolioCardContainer>
      <PortfolioImage />
      <PortfolioDescriptionContainer>
        <PortfolioTitle>Portfolio card {title}</PortfolioTitle>
        <PortfolioShortDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          iaculis erat vel velit commodo, non interdum neque vulputate. Integer
          euismod dolor non enim iaculis,
        </PortfolioShortDescription>
      </PortfolioDescriptionContainer>
    </PortfolioCardContainer>
  )
}

export default PortfolioCard
