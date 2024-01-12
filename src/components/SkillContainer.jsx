import { forwardRef } from "react";
import SkillIcon from "./SkillIcon";
import { Container } from "react-bootstrap";
import { SKILLS } from "../util/Constants";

const SkillContainer = (props, ref) => {
    return (
        <Container ref={ref} className="text-center mt-2">
            <h1>Skills</h1>
            <ul className="list-inline mx-auto"></ul>
            {SKILLS.map(x => <SkillIcon key={x.name} name={x.name} src={x.src}/>)}
        </Container>
    )
}

export default forwardRef(SkillContainer);