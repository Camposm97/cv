import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import JobCard from "./JobCard";
import { Container } from 'react-bootstrap';
import { forwardRef } from 'react';

const JobsContainer = (props, ref) => {
    const arr = [
        {
            title: 'Undergraduate Teaching Assistant',
            company: 'Stony Brook University',
            desc: 'Engaged in guiding students through the Fundamentals of Software Development, contributing actively to lectures to stimulate student discussions. Delivered constructive feedback on instructor\'s homework assignments and hosted regular office hours for students seeking assistance with course-related queries.',
            date: 'Jan 2022 - May 2023'
        },
        {
            title: 'Computer Science Tutor',
            company: 'Suffolk County Community College',
            desc: 'Worked with students to resolve confusion in concepts and critiqued problem solving approach.',
            date: 'May 2019 - May 2020'
        },
        {
            title: 'Web Master',
            company: 'Society of Hispanic Professional Engineers at Stony Brook University',
            desc: 'Maintained and updated SHPE website for future planned events',
            date: 'Sep 2021 - May 2023'
        }
    ]
    return (
        <Container ref={ref} fluid className='mt-2'>
            <h1 className="text-center">Experience</h1>
            <Row xs={1} md={2} lg={3}>
                {arr.map(x =>
                    <Col key={x.title} >
                        <JobCard job={x}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default forwardRef(JobsContainer);