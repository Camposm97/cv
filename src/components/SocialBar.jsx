import { Container } from "react-bootstrap"
import SocialIcon from "./SocialIcon";
import { SOCIAL_CONTACTS } from "../util/Constants";

const SocialBar = () => {
    return (
        <Container>
            {SOCIAL_CONTACTS.map(x => <SocialIcon key={x.id} id={x.id} src={x.src} link={x.link}/>)}
        </Container>
    )
}

export default SocialBar;