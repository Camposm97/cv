import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {
    const {proj} = props;
    return (
        <Card>
            <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;