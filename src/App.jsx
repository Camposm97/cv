import NavMenu from './components/NavMenu';
import './App.css'
import { Container } from 'react-bootstrap';
import AboutContainer from './components/About.Container';

export default function App() {
  return (
    <Container fluid className='App'>
      <NavMenu/>
      <AboutContainer/>
    </Container>
  );
}
