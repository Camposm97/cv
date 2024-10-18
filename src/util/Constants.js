
const NAME = 'Michael Campos'
const ABOUT_HEAD = 'Hello World! Welcome to my Website! 🤓'
const ABOUT_DESC = "Computer Science graduate with 5 years of programming experience. Currently, I'm currently seeking full-time/internship opportunities to apply my skills and contribute to innovative projects. If you think I'd be a good fit, please feel free to contact me."



const SOCIAL_PROPS = [
    {
        id: 'github',
        src: 'github.svg',
        link: 'https://github.com/CamposmDev',
        alt: 'github-icon',
    },
    {
        id: 'linkedin',
        src: 'linkedin.svg',
        link: 'https://linkedin.com/in/michael-campos1',
        alt: 'linkedin-icon',
    },
    {
        id: 'email',
        src: 'email.svg',
        link: 'mailto:camposm.work@gmail.com',
        alt: 'email-icon',
    },
]

const SKILLS = [
    { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
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
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
]

const JOBS = [
    {
        title: 'Undergraduate Teaching Assistant',
        company: 'Stony Brook University',
        desc: 'Engaged in guiding students through the Fundamentals of Software Development, contributing actively to lectures to stimulate student discussions. Delivered constructive feedback on instructor\'s homework assignments and hosted regular office hours for students seeking assistance with course-related queries.',
        date: 'Jan 2022 - May 2023'
    },
    {
        title: 'Computer Science Tutor',
        company: 'Suffolk County Community College',
        desc: 'Worked with students to resolve confusion in concepts and critiqued problem solving approach.',
        date: 'May 2019 - May 2020'
    },
    {
        title: 'Web Master',
        company: 'Society of Hispanic Professional Engineers at Stony Brook University',
        desc: 'Maintained and updated SHPE website for future planned events.',
        date: 'Sep 2021 - May 2023'
    }
]

const PROJECTS = [
    {
        title: 'Base Converter',
        desc: 'A tool to quickly convert numbers to different bases such as binary or hexadecimal. Utilized Android SDK using Java.'
    },
    {
        title: 'Quick Clips',
        desc: 'A tool to quickly convert numbers to different bases such as binary or hexadecimal. This app was built on Android using Java.'
    },
    {
        title: 'College Navigator',
        desc: 'An app built on Android using Java to help find the colleges and that will accept you into their school based on your SAT score.'
    }
]

export {
    NAME,
    ABOUT_HEAD,
    ABOUT_DESC,
    SOCIAL_PROPS as SOCIAL_CONTACTS,
    SKILLS,
    JOBS,
    PROJECTS
}