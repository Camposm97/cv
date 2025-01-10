import { Container } from "react-bootstrap"
import { Slide } from "react-awesome-reveal"

const Footer = () => {
    return (
        <Container fluid className='text-center' style={{margin: '100px 0px 0px 0px'}}>
            <Slide direction='up' triggerOnce>
                <p>Developed by Michael Campos</p>
            </Slide>
        </Container>
    )
}

export default Footer