import { forwardRef } from "react"
import { JackInTheBox, Slide } from "react-awesome-reveal"
import { Container } from "react-bootstrap"
import { SCHOOLS } from "../util/Constants"
import AcademicCard from "./AcademicCard"

const AcademicsContainer = (props, ref) => {
    return (
        <Container ref={ref} fluid className="mb-4">
            <Container className="d-flex justify-content-center">
                <Slide triggerOnce className="mb-5">
                    <h1>Academics</h1>
                </Slide>
            </Container>
            <Container>
                <JackInTheBox triggerOnce cascade damping={0}>
                    {SCHOOLS.map(x => (
                        <Container key={x.name} className="mb-4">
                            <AcademicCard school={x} />
                        </Container>
                    ))}
                </JackInTheBox>
            </Container>
        </Container>
    )
}

export default forwardRef(AcademicsContainer)