import { Card } from "react-bootstrap";

const ExperienceCard = (props) => {
    const {title, company, desc} = props;
    return (
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ExperienceCard;