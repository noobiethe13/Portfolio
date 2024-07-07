import DisneyClone from "../assets/projects/disney_clone.png";
import SmartOwl from "../assets/projects/smart_owl.png";
import ReminderApp from "../assets/projects/reminder_app.png";
import WeatherApp from "../assets/projects/weather_app.png";

export const HERO_CONTENT = `Full-stack developer with 1 year of combined agency and freelance experience crafting beautiful, functional apps. I wear many hats, building user interfaces with HTML, Tailwind CSS, and React for web, creating cross-platform mobile experiences with Flutter, and even diving into native Android development using Kotlin, Java. My backend expertise in Node.js, Express.js, Firebase, MongoDB, and AWS ensures scalable solutions. I'm passionate about user engagement and driving business growth through my applications.`;

export const ABOUT_TEXT = `I'm a tech-obsessed full-stack developer with a year of experience building web and mobile apps. My coding journey began with pure curiosity, sparked by a GitHub page for a Kotlin video player that left me wondering how this seemingly gibberish could turn into a functional app. Now, I work with HTML, Tailwind CSS, React for web, and Flutter for cross-platform mobile, along with native Android using Kotlin and Java. My backend skills include Node.js, Express.js, Firebase, MongoDB, and AWS. As a lifelong learner, I'm always exploring new tech and contributing to open-source projects. I thrive on creating beautiful, functional apps that drive user engagement and business growth.`;

export const EXPERIENCES = [
  {
    year: "01/2024 - Present",
    role: "Product & App Development Manager",
    company: "Locamart",
    description: `Led teams across different domains and keep track of and integrate their workflows to develop an e-commerce application using Flutter, Firebase, and AI integrations. Setup authentication, push notifications, using Firebase and, integrated Firestore for data storage & AI/ML models via endpoints. Collaborated with stakeholders to define project requirements and deadlines.`,
    technologies: ["Flutter", "Firebase", "Dart", "Kotlin", "Swift", "RESTAPI"],
  },
  {
    year: "05/2024 - 06/2024",
    role: "Full Stack App Developer(Freelance)",
    company: "Avocado Technologies",
    description: `Developed backend firebase schema & its integration with frontend for a guard tracking application. Also, made use of various RESTAPIs for email generation, QR generation, PDF generation, & file compressing. Collaborated with cross-functional teams to deliver high-quality product on schedule.`,
    technologies: ["Flutter", "Dart", "Firebase", "RESTAPI"],
  },
  {
    year: "03/2024 - 04/2024",
    role: "Full Stack App & Web Developer(Freelance)",
    company: "Zoomtod",
    description: `Designed and developed user interface & backend for mobile audio conferencing application using Flutter and LivekitSDK. Worked closely with other backend & frontend developers to integrate frontend features & develop Firebase structure & APIs using Nodejs & deployment on AWS. Implemented responsive designs and optimized frontend performance for both mobile app & web.`,
    technologies: ["Flutter", "React", "Dart", "Kotlin" ,"Firebase", "Nodejs", "RESTAPI", "AWS"],
  },
];

export const PROJECTS = [
  {
    title: "Disney+ Clone",
    image: DisneyClone,
    description:
      "A Disney+ landing page Clone built using ReactJs framework and Tailwind CSS for styling. It makes use of the TMDB movie database to fetch movie data via a Nodejs API deployed on AWS EC2.",
    technologies: ["HTML", "TailwindCSS", "React", "Node.js", "RESTAPI", "AWS"],
  },
  {
    title: "Smart Owl(Reddit Clone)",
    image: SmartOwl,
    description:
      "SmartOwl is a Reddit clone made using Flutter & Dart, with Riverpod state management, & Firebase as a backend & following a clean code architecture. However, unlike Reddit where any kind of information is shared, this app was built with the idea of creating communities & sharing posts, that can used as a source of knowledge or learning for people/professionals across various fields & domains.",
    technologies: ["Flutter", "Dart", "Firebase", "Riverpod"],
  },
  {
    title: "Reminder App",
    image: ReminderApp,
    description:
      "A ReminderApp made using Flutter that lets you create and manage prioritized reminders. It uses clean architecture and Riverpod for a smooth experience. Set titles, descriptions, dates, times, and priorities, then view them all neatly sorted. Switch themes, edit reminders, and get notified as deadlines approach - all with local storage to keep the data safe.",
    technologies: ["Flutter", "Dart", "Riverpod"],
  },
  {
    title: "Weather App",
    image: WeatherApp,
    description:
      "A weather checking application made using Jetpack Compose. It uses Retrofit & Gson Convertor to make calls to a weather data RESTAPI based on the city name entered.",
    technologies: ["Kotlin", "Jetpack Compose", "Retrofit", "RESTAPI"],
  },
];

export const CONTACT = {
  address: "Sector 46, Noida, India",
  phoneNo: "+91 7005071513",
  email: "debayandas1211@gmail.com",
};