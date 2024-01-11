import ExperienceCard from "./ExperienceCard";

const ExperienceContainer = () => {
    const arr = [
        {
            title: 'Undergraduate Teaching Assistant',
            company: 'Stony Brook University',
            desc: 'Engaged in guiding students through the Fundamentals of Software Development, contributing actively to lectures to stimulate student discussions. Delivered constructive feedback on instructor\'s homework assignments and hosted regular office hours for students seeking assistance with course-related queries.'
        },
        {
            title: 'Computer Science Tutor',
            company: 'Suffolk County Community College',
            desc: 'Worked with students to resolve confusion in concepts and critiqued problem solving approach.'
        },
        {
            title: 'Web Master',
            company: 'Society of Hispanic Professional Engineers at Stony Brook University',
            desc: 'Maintained and updated SHPE website for future planned events'
        }
    ]
    return (
        <div id="xp-section" className='mx-auto text-center card-view'>
            <h1 className="heading">Experience</h1>
            {arr.map(x => <ExperienceCard key={x.title} title={x.title} company={x.company} desc={x.desc}/>)}
            {/* <li style={{ fontSize: '14pt' }}>
                Undergraduate Teaching Assistant @ Computer Science Department of Stony Brook University
                <p style={{marginLeft: '40px'}}>Engaged in guiding students through the Fundamentals of Software
                    Development, contributing actively to lectures to stimulate student discussions. Delivered
                    constructive feedback on instructor's homework assignments and hosted regular office hours
                    for students seeking assistance with course-related queries.</p>
            </li>
            <li style={{ fontSize: '14pt' }}>
                Computer Science Tutor @ Suffolk County Community College
                <p style={{marginLeft: '40px'}}>Worked with students to resolve confusion in concepts and
                    critiqued problem solving approach.</p>
            </li>
            <li style={{ fontSize: '14pt' }}>
                Web Master @ Society of Hispanic Professional Engineers at Stony Brook University
                <p style={{ marginLeft: '40px' }}>Maintained and updated SHPE
                    <a style={{color: 'lightblue'}} href="http://www.stonybrookshpe.org/"
                        target="_blank">website</a><span>{' '}</span>
                    for future planned events.</p>
            </li> */}
        </div>
    );
}

export default ExperienceContainer;