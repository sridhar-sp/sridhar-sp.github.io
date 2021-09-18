import styled, { keyframes } from 'styled-components'
import { Constants } from 'pages/Landing/App.style'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    flex-direction: column;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    flex-direction: row;
  }
`

const morph = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`

const ProfileImageContainer = styled.div`
  min-width: 16rem;
  min-height: 16rem;
  width: 16rem;
  height: 16rem;
  overflow: hidden;
  border-radius: 50%;

  border-width: 0.3rem;
  border-style: solid;
  border-color: #ffffff;

  /* animation: ${morph} 8s ease-in-out 1s infinite; */
`

const ProfileImage = styled.img`
  width: auto;
  height: 100%;
  margin-left: -4rem;
`

const ProfileDescription = styled.div`
  flex: 0.75;
  display: flex;

  flex-direction: column;
  row-gap: 1.5rem;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    align-items: center;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    margin-left: 4rem;
  }
`

const ProfileName = styled.h1`
  color: ${({ theme }) => theme.colors.onBackground};
  text-decoration: none;
  margin: 0;
`

const ShortBio = styled.h3`
  color: ${({ theme }) => theme.colors.onBackground};
  margin: 0;
`

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`

const FaIconAttrStyles = ({ theme }) => {
  return {
    size: Constants.FONT_AWESOME_ICON_MEDIUM_SIZE,
    fill: theme.colors.onBackground,
  }
}

const Github = styled(FaGithub).attrs(FaIconAttrStyles)``

const Twitter = styled(FaTwitter).attrs(FaIconAttrStyles)``

const Linkedin = styled(FaLinkedin).attrs(FaIconAttrStyles)``

export {
  HomeContainer,
  ProfileImageContainer,
  ProfileImage,
  ProfileDescription,
  ProfileName,
  ShortBio,
  SocialLinks,
  Twitter,
  Github,
  Linkedin,
}
