import { Image } from "react-bootstrap";

const SocialIcon = ({id, src, link}) => {
    let elem = <Image id={id} src={src} className={'social-icon'}/>
    if (link) elem = <a href={link} target="_blank">{elem}</a>
    return elem
}

export default SocialIcon;