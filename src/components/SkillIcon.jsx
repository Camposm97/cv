import { Image } from "react-bootstrap";

const SkillIcon = (props) => {
    const {name, src} = props
    return (
        <li className="list-inline-item mx-3">
            <span>
                <div className='text-center skills-tile'>
                    <Image src={src}/>
                    <p className='text-center'>
                        {name}
                    </p>
                </div>
            </span>
        </li>
    )
}

export default SkillIcon;