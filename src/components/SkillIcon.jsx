import { JackInTheBox } from "react-awesome-reveal";
import { Image } from "react-bootstrap";

const SkillIcon = (props) => {
    const {name, src} = props
    return (
        <li className="list-inline-item mx-3">
            <span>
                <JackInTheBox triggerOnce>
                    <div className='text-center skills-tile'>
                        <Image src={src} className="mb-1"/>
                        <p className='text-center'>
                            {name}
                        </p>
                    </div>
                </JackInTheBox>
            </span>
        </li>
    )
}

export default SkillIcon;