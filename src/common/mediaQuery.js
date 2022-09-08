import { generateMedia } from "styled-media-query";

const breakPoints = {
  huge: "1440px",
  large: "1170px",
  medium: "768px",
  small: "450px",
};

const customMedia = generateMedia(breakPoints);

export const mediaQuery = {
  isMobile: customMedia.lessThan("medium"),
  isDesktop: customMedia.greaterThan("medium"),
};
