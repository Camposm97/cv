import { Card } from "react-bootstrap";

const ProjectCard = (props) => {
    const {title, desc} = props;
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;