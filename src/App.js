import NavMenu from './components/NavMenu';
import './App.css'
import { Button, Container } from 'react-bootstrap';

export default function App() {
  return (
    <Container fluid className='App' data-bs-theme='dark'>
      <NavMenu/>
    </Container>
  );
}
