import React from 'react'
import {
  PortfolioCardContainer,
  PortfolioImage,
  PortfolioDescriptionContainer,
  PortfolioTitle,
  PortfolioShortDescription,
} from './PortfolioCard.style'

const PortfolioCard = ({ portfolio }) => {
  const {
    portfolioImageUrl,
    portfolioTitle,
    portfolioShortDescription,
    portfolioExternalLink,
  } = { ...portfolio }
  return (
    <PortfolioCardContainer href={portfolioExternalLink}>
      <PortfolioImage imageUrl={portfolioImageUrl} />
      <PortfolioDescriptionContainer>
        <PortfolioTitle>{portfolioTitle}</PortfolioTitle>
        <PortfolioShortDescription>
          {portfolioShortDescription}
        </PortfolioShortDescription>
      </PortfolioDescriptionContainer>
    </PortfolioCardContainer>
  )
}

export default PortfolioCard
