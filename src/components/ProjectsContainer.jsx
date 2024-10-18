import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard";
import { Container } from 'react-bootstrap';
import { forwardRef } from 'react';
import { PROJECTS } from '../util/Constants';
import { Element } from 'react-scroll';

const ProjectsContainer = (props, ref) => {
    return (
        <Element name='proj'>
            <Container fluid className='mt-2'>
                <div ref={ref} />
                <h1 className="text-center">Projects</h1>
                <Row xs={1} md={2} lg={3}>
                    {PROJECTS.map(x =>
                        <Col key={x.title}>
                            <ProjectCard proj={x} />
                        </Col>
                    )}
                </Row>
            </Container>
        </Element>
    );
}

export default forwardRef(ProjectsContainer);