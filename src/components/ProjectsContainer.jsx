import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard";
import { Container } from 'react-bootstrap';

const ProjectsContainer = () => {
    const arr = [
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
    return (
        <Container fluid>
            <h1 className="text-center">Projects</h1>
            <Row xs={1} md={2} lg={3} xl={4}>
                {arr.map(x =>
                    <Col key={x.title}>
                        <ProjectCard proj={x} />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default ProjectsContainer;