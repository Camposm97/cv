import { Image } from "react-bootstrap";

const SocialIcon = (props) => {
    return <a href={props.link} target="_blank">
        <Image {...props} className='filter-invert social-icon'></Image>
    </a>
}

export default SocialIcon;