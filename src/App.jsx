import NavMenu from './components/NavMenu';
import './App.css'
import { Container } from 'react-bootstrap';
import AboutContainer from './components/AboutContainer';
import SkillContainer from './components/SkillContainer';
import JobsContainer from './components/JobsContainer';
import ProjectsContainer from './components/ProjectsContainer';
import { useRef } from 'react';

const Footer = () => {
  return (
    <Container fluid className='text-center' style={{margin: '100px 0px 0px 0px'}}>
      <p>Developed by Michael Campos</p>
    </Container>
  )
}

const App = () => {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const jobRef = useRef(null);
  const projRef = useRef(null);
  return (
    <Container fluid className='App'>
      <NavMenu refs={{about: aboutRef, skill: skillRef, job: jobRef, proj: projRef}}/>
      <AboutContainer ref={aboutRef}/>
      <SkillContainer ref={skillRef}/>
      <JobsContainer ref={jobRef}/>
      <ProjectsContainer ref={projRef}/>
      <Footer/>
    </Container>
  );
}

export default App;
