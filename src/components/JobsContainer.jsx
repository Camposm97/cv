import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import JobCard from "./JobCard";
import { Container } from 'react-bootstrap';
import { forwardRef } from 'react';
import { JOBS } from '../util/Constants';
import { JackInTheBox, Slide } from 'react-awesome-reveal';

const JobsContainer = (props, ref) => {
    return (
        <Container ref={ref} fluid className='mb-4'>
            <Slide triggerOnce className='mb-5'>
                <h1 className="text-center">Experience</h1>
            </Slide>
            <Row md={2} className='g-4'>
                <JackInTheBox 
                    className='d-flex' 
                    cascade 
                    triggerOnce
                    damping={0}
                >
                    {JOBS.map(x =>
                        <Col key={x.title} className='d-flex'>
                            <JobCard job={x}/>
                        </Col>
                    )}
                </JackInTheBox>
            </Row>
        </Container>
    );
}

export default forwardRef(JobsContainer);