import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Anshul Thathera",
  title: "Hi all, I'm Anshul",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with PHP, Laravel, React.js, Next.js, and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: " /Anshul-Thathera CV (27-07).pdf",
};

export const openSource = {
  githubUserName: "AnshulThathera1",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:anshulkasera35@gmail.com",
  linkedin: "https://www.linkedin.com/in/anshul-thathera",
  github: "https://github.com/AnshulThathera1",
  instagram: "https://www.instagram.com/anshulkasera.01",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "A FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Laravel & REST APIs"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "HTML",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "Laravel",
          iconifyTag: "logos:laravel",
        },
        {
          skillName: "SQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "C",
          iconifyTag: "logos:c",
        },
        {
          skillName: "NextJS",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "ReactJs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Geetanjali Institute of Technical Studies",
    subHeader: "Bachelor of Technology in Computer Science and Engineering",
    duration: "August 2020 - May 2024",
    desc: "I have completed my Bachelor of Technology in Computer Science and Engineering from Geetanjali Institute of Technical Studies, Udaipur.",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Central Academy Senior Secondary School, Udaipur",
    subHeader: "Senior Secondary School",
    duration: "April 2018 - March 2020",
    desc: "I have successfully completed my senior secondary education from Central Academy Senior Secondary School, Udaipur, during the academic period of April 2018 to March 2020.",
    grade: "Grade B",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full-Stack Developer",
    company: "Cognus Technology",
    companyLogo: "/img/icons/common/CT.png", // Update with actual logo if available
    date: "May 2025 – Present",
    desc: `Developing and maintaining scalable web applications using Next.js (frontend) and Laravel (PHP) (backend) for the Team Gradding.\nManaging and optimizing MySQL databases to ensure smooth data flow and system efficiency.\nCollaborating with cross-functional teams to deliver new features, fix bugs, and enhance overall user experience.`,
  },
  {
    role: "Web Developer",
    company: "Warrgyiz Morsch Pvt. Ltd.",
    companyLogo: "/img/icons/common/W.png", // Update with actual logo if available
    date: "Nov 2024 – Apr 2025",
    desc: `Accomplished Front End Developer with experience in React.js and .NET development.\nCollaborated closely with back-end developers and designers to enhance usability and optimize performance.\nImplemented responsive design techniques to ensure seamless user experiences across various devices and screen sizes.\nDemonstrated ability to work within agile methodologies, participating in sprint planning, stand-ups, and retrospectives.\nStrong problem-solving skills and a passion for creating innovative and intuitive web applications.`,
  },
  {
    role: "Web Developer",
    company: "Bharat Intern",
    companyLogo: "/img/icons/common/BI.png", // Update with actual logo if available
    date: "Internship",
    desc: `Gained hands-on experience and mentorship in industry-standard practices.\nSuccessfully executed three projects, showcasing proficiency in HTML, CSS, JavaScript, and SQL.\nDeveloped collaborative teamwork skills and deepened understanding of web development standards and best practices.`,
  },
];

export const projects: ProjectType[] = [
  {
    name: "E-Commerce Website",
    desc: `Developed an e-commerce clothing website from scratch using HTML, CSS, and JavaScript.\nUtilized JavaScript to add interactive features and enhance website functionality.\nImplemented responsive web design principles to ensure compatibility across various devices.`,
    github: "https://github.com/AnshulThathera1/Ak",
    link: "https://anshulthathera1.github.io/Ak/",
  },
  {
    name: "Shri Pahadi Balaji Website",
    desc: `Worked in a team of three to design and develop a website.\nIntroductory and donation collection site for the local temple of Udaipur.\nDeveloped using HTML, CSS, and JS.`,
    link: "https://www.shripahadibalaji.in/",
  },
  {
    name: "Brain Tumor Detection",
    desc: `Built a basic machine learning model to detect brain tumors from medical images.\nApplied image classification techniques to identify tumor presence.\nFocused on data preprocessing, model training, and evaluation.`,
    github: "https://github.com/AnshulThathera1/Brain-Tumor-Detection",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Anshul Thathera",
  description: greetings.description,
  author: "Anshul Thathera",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Anshul",
    "Anshul Thathera",
    "@anshulthathera",
    "anshulthathera",
    "Portfolio",
    "Anshul Portfolio ",
    "Anshul Thathera Portfolio",
  ],
};
