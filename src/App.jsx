import NavMenu from './components/NavMenu';
import './App.css'
import { Container } from 'react-bootstrap';
import AboutContainer from './components/About.Container';
import SkillContainer from './components/SkillContainer';
import JobContainer from './components/JobContainer';
import ProjectsContainer from './components/ProjectsContainer';

export default function App() {
  return (
    <Container fluid className='App'>
      <NavMenu/>
      <AboutContainer/>
      <SkillContainer/>
      <JobContainer/>
      <ProjectsContainer/>
    </Container>
  );
}
