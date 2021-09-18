import React from 'react'
import { ContentContainer } from '../Landing/App.style'
import {
  HomeContainer,
  ProfileImageContainer,
  ProfileImage,
  ProfileDescription,
  ProfileName,
  ShortBio,
  SocialLinks,
  Twitter,
  Linkedin,
  Github,
} from './Home.style'
import { homeScreenConfig } from 'config/Config'
import { Anchor } from 'components/common/Common.style'
const Home = ({ theme }) => {
  return (
    <ContentContainer>
      <HomeContainer>
        <ProfileImageContainer>
          <ProfileImage src={homeScreenConfig.profilePicUrl} />
        </ProfileImageContainer>
        <ProfileDescription>
          <ProfileName>{homeScreenConfig.profileName}</ProfileName>
          <ShortBio>{homeScreenConfig.profileShortDesc}</ShortBio>
          <SocialLinks>
            <Anchor href={homeScreenConfig.socialLinks.github}>
              <Github />
            </Anchor>
            <Anchor href={homeScreenConfig.socialLinks.linkedIn}>
              <Linkedin />
            </Anchor>
            <Anchor href={homeScreenConfig.socialLinks.twitter}>
              <Twitter />
            </Anchor>
          </SocialLinks>
        </ProfileDescription>
      </HomeContainer>
    </ContentContainer>
  )
}

export default Home
