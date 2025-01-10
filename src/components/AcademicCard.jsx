import { Card } from "react-bootstrap"

const AcademicCard = (props) => {
    const { school } = props

    return (
        <Card>
            <Card.Body>
                <Card.Title>{school.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{school.degree}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">GPA: {school.gpa}</Card.Subtitle>
            </Card.Body>
            <Card.Footer>{school.date}</Card.Footer>
        </Card>
    )
}

export default AcademicCard