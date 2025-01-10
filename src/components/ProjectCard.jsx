import Card from 'react-bootstrap/Card';

const ProjectCard = (props) => {
    const {proj} = props;
    return (
        <Card className='flex-fill'>
            <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.desc}</Card.Text>
                {proj.demo && 
                    <Card.Link href={proj.demo}>{proj.demo}</Card.Link>
                }
            </Card.Body>
            {proj.date && 
                <Card.Footer className='text-muted'>{proj.date}</Card.Footer>
            }
        </Card>
    )
}

export default ProjectCard;