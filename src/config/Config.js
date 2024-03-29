const homeScreenConfig = {
  profilePicUrl:
    "https://firebasestorage.googleapis.com/v0/b/portfolio-930c6.appspot.com/o/public%2Fportfolio%2Fprofile_pic.jpeg?alt=media",
  profileName: "Sridhar Subramani",
  profileShortDesc: `I am an experienced Android developer with 7 years of expertise in crafting high-quality Android applications. I started my
  career in 2015 and since then I have gained proficiency in developing both system apps, third party apps and hybrid apps. I
  have also worked on back-end systems and developed a couple of hobby projects, including a multiplayer drawing game. I'm
  currently exploring other domains to broaden my understanding of technology.`,
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/sridharsp",
    github: "https://github.com/sridhar-sp",
    twitter: "https://twitter.com/sridhar_s27",
    medium: "https://medium.com/@sridhar-sp",
  },
};

const aboutScreenConfig = {};

const portfolioScreenConfig = {
  title: "Portfolio",
  portfolios: [
    {
      portfolioImageUrl:
        "https://raw.githubusercontent.com/sridhar-sp/sridhar-sp.github.io/main/assets/images/draw_guess_preview.png",
      portfolioTitle: "Draw and Guess",
      portfolioShortDescription:
        `A multi-player drawing game to play with your friends & family.` +
        `
        
        ` +
        `This is a drawing game where one player draw a given word and others will try to guess the word. Each player will take a turn on drawing and guessing. The scores will be assigned based on how quick participant guessed the word and how well their drawing is understood by other players.`,
      portfolioExternalLink: "https://play.google.com/store/apps/details?id=com.gandiva.draw",
    },
    {
      portfolioImageUrl:
        "https://raw.githubusercontent.com/sridhar-sp/sridhar-sp.github.io/main/assets/images/neumorphic_compose_preview.png",
      portfolioTitle: "Neumorphism using Jetpack Compose",
      portfolioShortDescription:
        `Neumorphism is a User Interface design style that started gaining in popularity in late 2019.` +
        `
        
        ` +
        `It has two main components - an extruded element and a pressed one.` +
        ` They are created by using a light and dark colors by applying drop shadow and inner-shadow respectively.
        `,
      portfolioExternalLink: "https://github.com/sridhar-sp/compose-neumorphism",
    },
    {
      portfolioImageUrl:
        "https://raw.githubusercontent.com/sridhar-sp/sridhar-sp.github.io/main/assets/images/distributed_task_scheduler.webp",
      portfolioTitle: "Distributed Task Scheduler Using RabbitMQ and Redis",
      portfolioShortDescription:
        `Delay Task Execution Using RabbitMQ deadLetterExchange` +
        `
        
        ` +
        ` The application provided serves as an illustration of how to implement delayed task execution using RabbitMQ's deadLetterExchange and message expiration time.`,
      portfolioExternalLink:
        "https://betterprogramming.pub/build-a-distributed-task-scheduler-using-rabbitmq-and-redis-8ee1310cfc8",
    },
    {
      portfolioImageUrl:
        "https://raw.githubusercontent.com/sridhar-sp/sridhar-sp.github.io/main/assets/images/numerology_preview.png",
      portfolioTitle: "Numerology calculator",
      portfolioShortDescription:
        `Draw meaning from different numbers from your name and date of birth` +
        `
        
        ` +
        `The app user interface is built using Jetpack compose and uses "neumorphic" design model.`,
      portfolioExternalLink: "https://play.google.com/store/apps/details?id=com.gandiva.numerology",
    },
    {
      portfolioImageUrl:
        "https://raw.githubusercontent.com/sridhar-sp/sridhar-sp.github.io/main/assets/images/tic_tac_toe_preview.png",
      portfolioTitle: "Tic-tac-toe",
      portfolioShortDescription:
        `Tic-tac-toe game from markdown file. This is a learning attempt to see how interactive Github readme file can be.` +
        `
        
        ` +
        ` Checkout the backend code here. https://github.com/sridhar-sp/tic-tac-toe-backend`,
      portfolioExternalLink: "https://github.com/sridhar-sp/tic-tac-toe",
    },
    {
      portfolioImageUrl:
        "https://raw.githubusercontent.com/sridhar-sp/sridhar-sp.github.io/main/assets/images/sort_algo_preview.png",
      portfolioTitle: "Sorting visualizer",
      portfolioShortDescription:
        `This project shows a simple visual representation of the various sorting algorithms,` +
        ` which helps to get a sense of the time complexity each sorting algorithm takes to sort the data set.` +
        `
        
        ` +
        `Fun fact: I was trying to explore how fast react state changes and how quickly it renders the UI without any noticeable delay` +
        `. and this project was born out of that experiment.` +
        ` Every data swap causes a re-render frequently and react handles it with ease.`,
      portfolioExternalLink: "https://sridhar-sp.github.io/sorting-visualizer-algorithm/",
    },
  ],
};

export { homeScreenConfig, aboutScreenConfig, portfolioScreenConfig };
