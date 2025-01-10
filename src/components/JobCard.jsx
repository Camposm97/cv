import { Slide } from 'react-awesome-reveal';
import Card from 'react-bootstrap/Card';

const JobCard = (props) => {
    const { job } = props;
    return (
        <Card className='flex-fill'>
            <Card.Body>
                <Card.Title className="mb-2"><b>{job.title}</b></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
                <Card.Text>{job.desc}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{job.date}</Card.Footer>
        </Card>
    )
}

export default JobCard;