import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import JobCard from "./JobCard";
import { Container } from 'react-bootstrap';
import { forwardRef } from 'react';
import { JOBS } from '../util/Constants';

const JobsContainer = (props, ref) => {
    return (
        <Container ref={ref} fluid className='mt-2'>
            <h1 className="text-center">Experience</h1>
            <Row xs={1} md={2} lg={3}>
                {JOBS.map(x =>
                    <Col key={x.title} >
                        <JobCard job={x}/>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default forwardRef(JobsContainer);