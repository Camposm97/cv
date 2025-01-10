import NavMenu from './components/NavMenu';
import './App.css'
import { Container } from 'react-bootstrap';
import AboutContainer from './components/AboutContainer';
import SkillContainer from './components/SkillContainer';
import JobsContainer from './components/JobsContainer';
import ProjectsContainer from './components/ProjectsContainer';
import Footer from './components/Footer';
import { forwardRef, useRef } from 'react';
import AcademicsContainer from './components/AcademicsContainer';

const App = () => {
  const aboutRef = useRef(null);
  const acadRef = useRef(null);
  const skillRef = useRef(null);
  const jobRef = useRef(null);
  const projRef = useRef(null);

  return (
    <Container className='App'>
      <NavMenu refs={{about: aboutRef, acad: acadRef, skill: skillRef, job: jobRef, proj: projRef}}/>
      <AboutContainer ref={aboutRef} />
      <AcademicsContainer ref={acadRef} />
      <SkillContainer ref={skillRef} />
      <JobsContainer ref={jobRef} />
      <ProjectsContainer ref={projRef} />
      <Footer/>
    </Container>
  );
}

export default App;
