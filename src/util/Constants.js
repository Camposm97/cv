import Email from "../assets/email.svg"
import Github from "../assets/github.svg"
import LinkedIn from "../assets/linkedin.svg"

const NAME = 'Michael Campos'
const ABOUT_HEAD = 'Hello World! Welcome to my Website! 🤓'
const ABOUT_DESC = "Computer Science graduate with 7 years of programming experience. Currently, I'm studying towards my masters in Computer Science at Hoftra University and seeking full-time/internship opportunities to apply my skills and contribute to innovative projects. If you think I'd be a good fit, please feel free to contact me."


const SOCIAL_CONTACTS = [
    { id: 'github', src: Github, link: 'https://github.com/CamposmDev' },
    { id: 'linkedin', src: LinkedIn, link: 'https://linkedin.com/in/michael-campos1' },
    { id: 'email', src: Email, link: 'mailto:camposm.dev@gmail.com' }
]

const SCHOOLS = [
    {
        name: 'Hofstra University, Hempstead NY',
        degree: 'Master of Science in Computer Science',
        date: 'Expected May 2026',
        gpa: 'N/A'
    },
    {
        name: 'Stony Brook University, Stony Brook NY',
        degree: 'Bachelor of Science in Computer Science',
        date: 'May 2023',
        gpa: '3.2/4.0'
    },
    {
        name: 'Suffolk County Community College, Selden NY',
        degree: 'Associate of Science in Computer Science',
        date: 'May 2020',
        gpa: '3.9/4.0'
    }
]

/* TODO - decouple skills into categories similar to resume */
const SKILLS = [
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Anaconda', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg' },
    { name: 'HTML 5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS 3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Javascript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Typescript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MUI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'SQLite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Prisma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    { name: 'Postman', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: 'Bash', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
    { name: 'VSCode', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: 'Visual Studio', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
    { name: 'IntelliJ', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
    { name: 'Pycharm', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" },
    { name: 'Windows 11', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg" },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: 'Apple', src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg" },
]

const JOBS = [
    {
        title: 'Technology Internship',
        company: 'Rebel, New York City, NY',
        desc: 'Developed digital music service app through task-based front-end (React) and back-end (Django) assignments, collaborating via Slack/Google Meets, and managing tasks with Jira and version control with Git.',
        date: 'Oct 2024 - Present'
    },
    {
        title: 'Associate/Software Developer',
        company: 'Precision Automotive, Westhampton Beach NY',
        desc: 'Handled inventory management, coordinated timely auto parts pickup and delivery, assisted customers with inquiries and invoicing, and developed a custom application to improve repair shop invoice processing efficiency.',
        date: 'May 2016 - Present'
    },
    {
        title: 'Teaching Assistant',
        company: 'Stony Brook University',
        desc: 'Engaged in guiding students through the Fundamentals of Software Development, contributing actively to lectures to stimulate student discussions. Delivered feedback on instructor\'s homework assignments and held weekly office hours to address student questions and their programming assignments.',
        date: 'Jan 2022 - May 2023'
    },
    {
        title: 'Web Master',
        company: 'Society of Hispanic Professional Engineers at Stony Brook University',
        desc: 'Maintained and updated SHPE website for future planned events.',
        demo: 'https://www.stonybrookshpe.org/',
        date: 'Sep 2021 - May 2023'
    },
    {
        title: 'Computer Science Tutor',
        company: 'Suffolk County Community College',
        desc: 'Held eight hours of office hours weekly to address student questions and their programming assignments about Object Orineted Programming, Date Structures and Algorithms, and Computer Architecture and Organization.',
        date: 'May 2019 - May 2020'
    },
]

const PROJECTS = [
    {
        title: 'Real-Time Messenger',
        desc: 'Web app that allows users to chat with each other in real-time, share files, and view message history.',
        date: '2024'
    },
    {
        title: 'Autoshop Invoice Manager',
        desc: 'Java desktop app to manage, record, and print invoices for auto-repair shops.',
        date: '2023'
    },
    {
        title: 'TileTown',
        desc: 'Web app that allows users to upload, edit, and publish their tilesets and tilemaps wih other users. Users can edit their tilemaps with other users, join communities, make forum posts, host competitions, and export their tilesets and tilemaps.',
        date: '2022'
    },
    {
        title: 'Mcbendorjeee vs Robots',
        desc: 'Web based Top Down 2D Puzzle game using the Wolfie2D engine built using TypeScript ande NodeJS.',
        date: '2022',
        demo: 'https://mcbendorjee-vs-robots.firebaseapp.com/'
    },
    {
        title: 'Base Converter',
        desc: 'A tool to quickly convert numbers to different bases such as binary or hexadecimal. Utilized Android SDK using Java.',
        date: '2021'
    },
    {
        title: 'College Navigator',
        desc: 'An app built on Android using Java to help find the colleges and that will accept you into their school based on your SAT score.',
        date: '2020'
    }
]

export {
    NAME,
    ABOUT_HEAD,
    ABOUT_DESC,
    SOCIAL_CONTACTS,
    SCHOOLS,
    SKILLS,
    JOBS,
    PROJECTS
}