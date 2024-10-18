import { Container } from "react-bootstrap"
import SocialIcon from "./SocialIcon";
import { SOCIAL_CONTACTS } from "../util/Constants";

const SocialBar = () => {
    return (
        <Container>
            {SOCIAL_CONTACTS.map(props => 
                <SocialIcon key={props.id} 
                    {...props}
                />)}
        </Container>
    )
}

export default SocialBar;