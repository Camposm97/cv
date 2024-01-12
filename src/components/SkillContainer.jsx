import { forwardRef } from "react";
import SkillIcon from "./SkillIcon";
import { Container } from "react-bootstrap";

const SkillContainer = (props, ref) => {
    const skills = [
        ['Java', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'],
        ['HTML 5', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'],
        ['CSS 3', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'],
        ['Javascript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'],
        ['Typescript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        ['Node', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'],
        ['React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'],
        ['MUI', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'],
        ['MongoDB', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'],
        ['MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
        ['SQLite', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'],
        ['Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg']
    ];
    return (
        <Container ref={ref} className="text-center mt-2">
            <h1>Skills</h1>
            <ul className="list-inline mx-auto"></ul>
            {skills.map(a => <SkillIcon key={a[0]} name={a[0]} src={a[1]}/>)}
        </Container>
    )
}

export default forwardRef(SkillContainer);