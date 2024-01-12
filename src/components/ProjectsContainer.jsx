import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard";
import { Container } from 'react-bootstrap';
import { forwardRef } from 'react';
import { PROJECTS } from '../util/Constants';

const ProjectsContainer = (props, ref) => {
    
    return (
        <Container ref={ref} fluid className='mt-2'>
            <h1 className="text-center">Projects</h1>
            <Row xs={1} md={2} lg={3}>
                {PROJECTS.map(x =>
                    <Col key={x.title}>
                        <ProjectCard proj={x} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default forwardRef(ProjectsContainer);