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
const Home = ({ theme }) => {
  return (
    <ContentContainer>
      <HomeContainer>
        <ProfileImageContainer>
          <ProfileImage src="https://kavenyou.com/wp-content/uploads/2017/07/May-2-2.jpg" />
        </ProfileImageContainer>
        <ProfileDescription>
          <ProfileName>Sridhar Subramani</ProfileName>
          <ShortBio>
            Self-taught software developer with great problem-solving skills,
            having 5+ years of craftsmanship in developing awesome android
            applications.
          </ShortBio>
          <SocialLinks>
            <Github />
            <Linkedin />
            <Twitter />
          </SocialLinks>
        </ProfileDescription>
      </HomeContainer>
    </ContentContainer>
  )
}

export default Home
