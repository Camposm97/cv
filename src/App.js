import NavMenu from './components/NavMenu';
import './App.css'
import { Image, Container, Row, Col, Form } from 'react-bootstrap';

export default function App() {
  return (
    <Container fluid className='App'>
      <NavMenu/>
      <Container fluid className='d-flex justify-content-center mt-2 mb-2'>
        <Row>
          <Col sx={12} className='text-center'>
            <Image src='favicon.png' fluid thumbnail roundedCircle
              style={{maxWidth: '40%'}}></Image>
            <h4>Hello World! Welcome to my Website! &#129299;</h4>
            {/* Links */}
            <Container> 
                <img id="icon-github" src="github.svg" class="filter-invert inactive social-icon" />
                <img id="icon-linkedin" src="linkedin.svg" class="filter-invert inactive social-icon" />
                <a href="mailto:camposm.dev@gmail.com">
                    <img id="icon-email" src="email.svg" class="filter-invert inactive social-icon" />
                </a>
            </Container>
            <h5>
              Computer Science graduate with 5 years of programming experience. Currently, I'm currently seeking full-time/internship opportunities to apply my skills and contribute to innovative projects. If you think I'd be a good fit, please feel free to contact me.
            </h5>
          </Col>
        </Row>
          
      </Container>
    </Container>
  );
}
