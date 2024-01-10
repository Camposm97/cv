import { useState } from "react";
import { Image } from "react-bootstrap";

const SocialIcon = (props) => {
    const [cn, setCN] = useState('filter-invert inactive social-icon');
    const { id, src, link } = props;
    const handleMouseEnter = () => {
        setCN('filter-invert active social-icon')
    }
    const handleMouseLeave = () => {
        setCN('filter-invert inactive social-icon');
    }
    let elem = <Image id={id} src={src} className={cn}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
    if (link) elem = <a href={link} target="_blank">{elem}</a>
    return elem;
}

export default SocialIcon;