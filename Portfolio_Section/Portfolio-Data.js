import {
  temp1Large,
  temp1Small,
  temp2Large,
  temp2Small,
  temp3Large,
  temp3Small,
  temp4Large,
  temp4Small,
  temp5Large,
  temp5Small,
  temp6Large,
  temp6Small,
  temp7Large,
  temp7Small,
  temp8Large,
  temp8Small,
  temp9Large,
  temp9Small,
  gptLarge,
  gptSmall,
} from "../assets/images/ReactApps.js";
import {
  todo,
  todo2,
  qrCodeGen,
  qrCodeGen2,
  movieGen,
  movieGen2,
  avatarGen,
  avatarGen2,
  wordle,
  wordle2,
  lyricsSearch,
  lyricsSearch2,
  colorBox,
  colorBox2,
  domainName,
  domainName2,
  paintApp,
  paintApp2,
} from "../assets/images/ReactApps.js";

const reactApps = [
  {
    id: 1,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Domain%20name%20finder",
    title: "Domain-Name-Generator",
    images: [domainName, domainName2],
    description:
      "The Domain Name Generator App is a dynamic tool that helps users brainstorm creative domain names.",
    link: "https://www.npmjs.com/package/@rstacruz/startup-name-generator",
    method:
      "Users can simply type their desired keywords and explore unique domain suggestions instantly.Dynamic Suggestions: The app generates a list of names dynamically.",
  },

  {
    id: 2,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Qr-Code-Generator",
    title: "QR-Code-Generator",
    images: [qrCodeGen, qrCodeGen2],
    description:
      "The QR Code Generator App is a customizable tool for creating and downloading QR codes effortlessly. ",
    link: "http://api.qrserver.com/v1/create-qr-code/?data=text!&size=200x200&bgcolor=red",
    method:
      "Users can input text to encode, adjust dimensions with a slider, and personalize the QR code's background color.",
  },
  {
    id: 3,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/TODO",
    title: "Todo-List",
    images: [todo, todo2],
    description:
      "The To-Do List App is a simple and efficient tool for task management and perfect for organizing daily activities or goals. ",
    method:
      "Users can add, edit, and delete tasks using the clean interface. Each task in the list is displayed with options to Edit or Delete and displayed board",
  },
  {
    id: 4,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Word-Guess",
    title: "Word-Guess-Game",
    images: [wordle, wordle2],
    description:
      "The Word Guess Game App is an interactive and engaging tool inspired by games like Wordle, challenging users to guess a word. ",
    method:
      "The app is taking the guess and from user then validate and respond app dynamically manages multiple feature like restart, get-hint or back-step ",
  },

  {
    id: 5,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Paint-APP",
    title: "Paint",
    images: [paintApp, paintApp2],
    description:
      "The Paint App is a drawing tool. With responsive canvas, it’s perfect for sketching and artistic exploration.",
    method:
      "It features options to adjust brush color, width, and opacity, empowering users to create artwork tailored to their preferences",
  },
  {
    id: 6,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Avatar-Generator",
    title: "Avatar-Generator",
    images: [avatarGen, avatarGen2],
    description:
      "The Avatar Generator app is creative platform for designing and downloading unique avatars across various categories.",
    link: "https://api.dicebear.com/9.x/bottts/svg/seed500",
    method:
      "User can simply choose creative avatar style and app start generate random avatar, allowing him to download ",
  },
  {
    id: 7,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Search-Movie-Trailer",
    title: "Search-Movie",
    images: [movieGen, movieGen2],
    description:
      "The Movie Mania app is a user-friendly platform designed for discovering movies and TV shows. ",
    method:
      "App is holding search bar where users can type queries to find their favorite titles. Below the search bar, the app displays a dynamic grid of movie and TV show posters.",
  },
  {
    id: 8,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Search%20Lyrics",
    title: "Lyrics-Finder",
    images: [lyricsSearch, lyricsSearch2],
    description:
      "The Lyrics Finder App is a simple and user-friendly tool that lets users quickly search for song lyrics.",
    link: "https://api.lyrics.ovh/v1/Eminem/Venom",
    method:
      "users can enter the artist name and song name into the provided input fields and hit the vibrant Search button to retrieve lyrics effortlessly.",
  },
  {
    id: 9,
    href: "https://github.com/MohamedEzz524/React-apps/tree/main/Color-Box-Changer",
    title: "Color-Box",
    images: [colorBox, colorBox2],
    description:
      "The Color Boxes App is an interactive tool generates grid of unique color pallets box. ",
    method:
      "By pressing any box it changes to random unique color, engaging and ever-changing visual experience. Perfect for exploring color palettes",
  },
];

const temps = [
  {
    id: 1,
    name: "Fifth-Template",
    large: temp6Large,
    small: temp6Small,
    href: "https://mohamedezz524.github.io/ZRevo-temp/",
    hrefGit: "https://github.com/MohamedEzz524/Fifth-project",
    type: "Portfolio Template",
    colors: "#9B5DE5",
    description:
      "Modern portfolio template  featuring reusable components, easy content management, and seamless customization. strong UI/UX, responsive and optimized for performance. Includes a fully functional contact form powered by Formspree. ",
    designSkills: ["React", "Tailwind", "Observer", "Components"],
  },
  {
    id: 2,
    name: "Bakeora Shop",
    large: temp8Large,
    small: temp8Small,
    href: "https://mohamedezz524.github.io/Bakeora",
    hrefGit: "https://github.com/MohamedEzz524/Bakeora-code",
    type: "Bakeora Shop",
    colors: "#FF6E00, #3C6FDD",
    description:
      "Bakeora is a modern bakery website built with React and Tailwind CSS, featuring reusable components, nested routing, product and blog pages, search-based navigation, and a responsive UI designed for seamless user experience.",
    designSkills: ["React-Router", "Tailwind", "Search navigation", "Motion"],
  },
  {
    id: 3,
    name: "Fifth-Template",
    large: temp7Large,
    small: temp7Small,
    href: "https://mohamedezz524.github.io/My-portfolio/",
    hrefGit: "https://github.com/MohamedEzz524/My-portfolio-code",
    type: "Portfolio v2",
    colors: "#9B5DE5",
    description:
      "Using Tailwind CSS, improving UI architecture for scalability and maintainability supporting themes. Enhanced performance and user experience with optimized rendering and smoother interactions",
    designSkills: ["React", "Tailwind"],
  },
  {
    id: 4,
    name: "Fourth-Template",
    hrefGit: "https://github.com/MohamedEzz524/Fourth-project",
    large: temp4Large,
    small: temp4Small,
    href: "https://mohamedezz524.github.io/Fourth-project/",
    type: "Special Design",
    colors: "#FF6E00,#3C6FDD ,#F4D03F",
    description:
      "A JavaScript-focused project to practice interactivity, responsive design, and user experience enhancements, including animations, theme switching, and Intersection Observer for dynamic effects.",
    designSkills: ["HTML", "CSS", "JavaScript", "Observer", "Themes"],
  },
  {
    id: 5,
    hrefGit: "https://github.com/MohamedEzz524/Third-project",
    name: "Third-Template",
    large: temp3Large,
    small: temp3Small,
    href: "https://mohamedezz524.github.io/Third-project/",
    type: "ElZero Training",
    colors: "#FF6E00,#3C6FDD,#F4D03F",
    description:
      "A simple interactive website built with JavaScript to practice core scripting, DOM manipulation, and basic user interaction. ",
    designSkills: ["HTML", "CSS", "JavaScript"],
  },

  {
    id: 6,
    name: "Fifth-Template",
    large: temp5Large,
    small: temp5Small,
    href: "https://mohamedezz524.github.io/Six_project/",
    hrefGit: "https://github.com/MohamedEzz524/Six_project",
    type: "Bandi Template",
    colors: "#9B5DE5",
    description:
      "A clean layout made with Bootstrap. Explored utility classes and responsiveness with minimal custom ",
    designSkills: ["HTML5", "Bootstrap"],
  },
  {
    id: 7,
    name: "Fifth-Template",
    large: temp9Large,
    small: temp9Small,
    href: "https://mohamedezz524.github.io/Fifth-project/",
    hrefGit: "https://github.com/MohamedEzz524/Fifth-project",
    type: "DevFolio Template",
    colors: "#9B5DE5",
    description:
      "A practice portfolio website built with Bootstrap to explore responsive layouts, reusable components, and rapid UI development. Designed to strengthen my skills in front-end structure and styling",
    designSkills: ["HTML5", "Bootstrap", "Responsive Design"],
  },
  {
    id: 8,
    name: "GPT-Template",
    hrefGit: "https://github.com/MohamedEzz524/GPT-3",
    large: gptLarge,
    small: gptSmall,
    href: "https://mohamedezz524.github.io/GPT-3",
    type: "GPT-3",
    colors: "#FF6E00, #3C6FDD",
    description:
      "A responsive landing page inspired by GPT-3, built with semantic HTML and modern CSS to practice layout design and front-end structure.",
    designSkills: ["HTML5", "CSS3", "Responsive Design"],
  },

  {
    id: 9,
    name: "Second-Template",
    hrefGit: "https://github.com/MohamedEzz524/Second-project",
    large: temp2Large,
    small: temp2Small,
    href: "https://mohamedezz524.github.io/Second-project/",
    type: "Kasper Template",
    colors: "#FF6E00, #3C6FDD",
    description:
      "Advanced With Styling and Layout by deeper in Css, Focused on cleaner design and better visual hierarchy",
    designSkills: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    id: 10,
    name: "First-Template",
    large: temp1Large,
    small: temp1Small,
    href: "https://mohamedezz524.github.io/First-project/",
    hrefGit: "https://github.com/MohamedEzz524/First-project",
    type: "Leonagency Template",
    colors: "#FF6E00, #3C6FDD",
    description:
      "My first website after learning web development fundamentals. A simple, responsive static layout built to practice structure, semantic HTML, and core CSS styling.",
    designSkills: ["HTML5", "CSS3", "Responsive Design"],
  },
];

export { temps, reactApps };
