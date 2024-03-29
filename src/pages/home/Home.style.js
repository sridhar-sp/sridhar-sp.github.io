import styled, { keyframes } from "styled-components";
import { Constants } from "pages/Landing/App.style";
import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";

const HomeContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    flex-direction: column;
    row-gap: 2rem;
  }
  @media (min-width: ${Constants.LANDSCAPE_WIDTH}) {
    flex-direction: row;
    column-gap: 4rem;
  }
`;

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
`;

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

  display: flex;
  justify-content: center;

  /* animation: ${morph} 8s ease-in-out 1s infinite; */
`;

const ProfileImage = styled.img`
  width: auto;
  height: 100%;
`;

const ProfileDescription = styled.div`
  flex: 0.75;
  display: flex;

  flex-direction: column;
  row-gap: 1.5rem;

  @media (max-width: ${Constants.PORTRAIT_WIDTH}) {
    align-items: center;
  }
`;

const ProfileName = styled.h1`
  color: ${({ theme }) => theme.colors.primaryText};
  text-decoration: none;
  margin: 0;
`;

const ShortBio = styled.h3`
  color: ${({ theme }) => theme.colors.secondaryText};
  margin: 0;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

const FaIconAttrStyles = ({ theme }) => {
  return {
    size: Constants.FONT_AWESOME_ICON_MEDIUM_SIZE,
    fill: theme.colors.onBackground,
  };
};

const IconHoverStyle = `
transition: transform 0.2s ease-in-out;
:hover {
  transform: scale(1.3);
}
`;

const Github = styled(FaGithub).attrs(FaIconAttrStyles)`
  ${IconHoverStyle}
`;

const Twitter = styled(FaTwitter).attrs(FaIconAttrStyles)`
  ${IconHoverStyle}
`;

const Linkedin = styled(FaLinkedin).attrs(FaIconAttrStyles)`
  ${IconHoverStyle}
`;

export const Medium = styled(FaMedium).attrs(FaIconAttrStyles)`
  ${IconHoverStyle}
`;

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
};
