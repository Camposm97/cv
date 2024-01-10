import { Container } from "react-bootstrap"
import SocialIcon from "./SocialIcon";

const SocialBar = () => {
    const contacts = [
        {id: 'github', src: 'github.svg', link: 'https://github.com/CamposmDev'},
        {id: 'linkedin', src: 'linkedin.svg', link: 'https://linkedin.com/in/michael-campos1'},
        {id: 'email', src: 'email.svg', link: 'mailto:camposm.dev@gmail.com'}
    ]
    return (
        <Container>
            {contacts.map(x => <SocialIcon key={x.id} id={x.id} src={x.src} link={x.link}/>)}
        </Container>
    )
}

export default SocialBar;