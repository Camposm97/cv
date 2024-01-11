import Card from 'react-bootstrap/Card';

const JobCard = (props) => {
    const { job } = props;
    return (
        <Card>
            <Card.Body>
                <Card.Title className="mb-2">{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                <Card.Text>{job.desc}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{job.date}</Card.Footer>
        </Card>
    )
}

export default JobCard;