import SocialIcon from "./SocialIcon";
import { SOCIAL_CONTACTS } from "../util/Constants";
import { Container } from "react-bootstrap";
import { JackInTheBox } from "react-awesome-reveal";

const SocialBar = () => {
    return (
        <Container className="d-flex justify-content-center">
            <JackInTheBox cascade triggerOnce>
                {SOCIAL_CONTACTS.map(x => (
                    <SocialIcon 
                        key={x.id} 
                        id={x.id} 
                        src={x.src} 
                        link={x.link}
                    />
                ))}
            </JackInTheBox>
        </Container>
    )
}

export default SocialBar;