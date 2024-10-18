import { forwardRef } from "react";
import SkillIcon from "./SkillIcon";
import { Container } from "react-bootstrap";
import { SKILLS } from "../util/Constants";
import { Element } from "react-scroll";

const SkillContainer = (props, ref) => {
    return (
        <Element name='skills'>
            <Container className="text-center mt-2">
                <div ref={ref} />
                <h1>Skills</h1>
                <ul className="list-inline mx-auto"></ul>
                {SKILLS.map(x => <SkillIcon key={x.name} name={x.name} src={x.src} />)}
            </Container>
        </Element>
    )
}

export default forwardRef(SkillContainer);