import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard";
import { Container } from 'react-bootstrap';
import { forwardRef } from 'react';
import { PROJECTS } from '../util/Constants';
import { JackInTheBox, Slide } from 'react-awesome-reveal';

const ProjectsContainer = (props, ref) => {
    return (
        <Container ref={ref} fluid>
            <Slide triggerOnce className='mb-5'>
                <h1 className="text-center">Projects</h1>
            </Slide>
            <Row md={2} className='g-4'>
                <JackInTheBox 
                    className='d-flex' 
                    cascade 
                    triggerOnce
                    damping={0}
                >
                    {PROJECTS.map(x =>
                        <Col key={x.title} className='d-flex'>
                            <ProjectCard proj={x} />
                        </Col>
                    )}
                </JackInTheBox>
            </Row>
        </Container>
    );
}

export default forwardRef(ProjectsContainer);