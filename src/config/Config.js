const homeScreenConfig = {
  profilePicUrl:
    'https://media-exp1.licdn.com/dms/image/C5603AQGVIiwttuV_Qg/profile-displayphoto-shrink_800_800/0/1626363420185?e=1637193600&v=beta&t=6E0TV2RNA0r6gJjcDo4rU2i3EVhboDBpnz2RVqDrl_Y',
  profileName: 'Sridhar Subramani',
  profileShortDesc: `Self-taught software developer with great problem-solving skills,
  having 5+ years of craftsmanship in developing awesome android
  applications.`,
  socialLinks: {
    linkedIn: 'https://www.linkedin.com/in/sridharsp',
    github: 'https://github.com/sridhar-sp',
    twitter: 'https://twitter.com/sridhar_s27',
  },
}

const aboutScreenConfig = {}

const portfolioScreenConfig = {
  title: 'Portfolio',
  portfolios: [
    {
      portfolioImageUrl:
        'https://raw.githubusercontent.com/sridhar-sp/sridhar-sp.github.io/main/assets/images/draw_guess_preview.png',
      portfolioTitle: 'Draw and Guess',
      portfolioShortDescription:
        `A multi-player drawing game to play with your friends & family.` +
        `
        
        ` +
        `This is a drawing game where one player draw a given word and others will try to guess the word. Each player will take a turn on drawing and guessing. The scores will be assigned based on how quick participant guessed the word and how well their drawing is understood by other players.`,
      portfolioExternalLink:
        'https://play.google.com/store/apps/details?id=com.gandiva.draw',
    },
    {
      portfolioImageUrl:
        'https://raw.githubusercontent.com/sridhar-sp/sridhar-sp.github.io/main/assets/images/sort_algo_preview.png',
      portfolioTitle: 'Sorting visualizer',
      portfolioShortDescription:
        `This project shows a simple visual representation of the various sorting algorithms,` +
        ` which helps to get a sense of the time complexity each sorting algorithm takes to sort the data set.` +
        `
        
        ` +
        `Fun fact: I was trying to explore how fast react state changes and how quickly it renders the UI without any noticeable delay` +
        `. and this project was born out of that experiment.` +
        ` Every data swap causes a re-render frequently and react handles it with ease.`,
      portfolioExternalLink:
        'https://sridhar-sp.github.io/sorting-visualizer-algorithm/',
    },
  ],
}

export { homeScreenConfig, aboutScreenConfig, portfolioScreenConfig }
