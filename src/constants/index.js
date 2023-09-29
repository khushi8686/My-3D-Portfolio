import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Developer",
    icon: web,
  },
  {
    title: "AR App Developer",
    icon: mobile,
  },
  {
    title: ".NET Developer",
    icon: backend,
  },
  {
    title: "Flutter Enthusiastic",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  /*{
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
 /* {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
  {
    title: "Game Developer",
    company_name: "Luqon",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Trained Unity Game Developer adept at creating captivating gaming experiences.",
      "Hands-on experience developing Moon Car Racing and Space Racing games, honing skills in VFX, animation, and scripting.",
      "Passionate about leveraging my proficiency in Unity, team collaboration, and industry-standard tools to innovate and delight in the gaming industry.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Interns Pakistan",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - May 2023",
    points: [
      "As an adept Virtual Frontend Website Developer, I've honed my skills in HTML5, CSS3, JavaScript ES6, and various modern frameworks, successfully transforming designs into functional, responsive web applications.",
      "Leveraging my comprehensive understanding of best practices and latest web technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I deliver visually engaging, user-friendly websites tailored to client needs.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a App as beautiful as our product, but Rick proved me wrong.",
    name: "Hamza",
    designation: "CEO",
    company: "Contour",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/rao_hamza_badar.jpg",
  },
  {
    testimonial:
      "I've never met a Android developer who truly cares about their clients' success like Rick does.",
    name: "Waqar Azeem",
    designation: "Project Manager",
    company: "IT Solution",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/events/PicsArt_09-28-08.39.43.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Hafsa Naeem",
    designation: "Event Handler",
    company: "Enterprises",
    image: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/hafsa_naeem.jpg",
  },
];

const projects = [
  {
    name: "Military Record Management System",
    description:
      "Our innovative .NET desktop app streamlines the organization of PAF, vacancies, CHM officer records, and extensive research, empowering seamless operations and informed decision-making.",
    tags: [
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
      {
        name: "Sql",
        color: "green-text-gradient",
      },
      {
        name: ".ASP",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Construction App",
    description:
      "Construction Estimator provides the estimated Cost of plot area construction Construction cost calculator application is used to calculate the cost of an area you want to construct according to your local area market rates and rules",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Sql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Space Driving Game",
    description:
      "Embark on an interstellar adventure in this captivating space-driving game! Developed using Unity and powered by C#, this thrilling Android game pushes the boundaries of virtual exploration. Master gravity-defying maneuvers as you navigate through cosmic obstacles and conquer the vastness of the galaxy.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C-sharp",
        color: "green-text-gradient",
      },
      {
        name: "3D Game",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences,testimonials, projects };
