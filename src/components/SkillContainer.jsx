import { forwardRef } from "react";
import SkillIcon from "./SkillIcon";
import { Container } from "react-bootstrap";
import { SKILLS } from "../util/Constants";
import { Slide } from "react-awesome-reveal";

const SkillContainer = (props, ref) => {
    return (
        <Container ref={ref} className="text-center mb-4">
            <Slide triggerOnce className="mb-5">
                <h1>Skills</h1>
            </Slide>
            <ul className="list-inline mx-auto">
                {SKILLS.map((x, i) => (
                        <SkillIcon 
                            key={x.name}
                            name={x.name} 
                            src={x.src}
                        />
                    ))}
            </ul>
        </Container>
    )
}

export default forwardRef(SkillContainer);