const ProjectsContainer = () => {
    return (
        <div id="projects-section" className='dark-mode card-view'>
            <h1 className="heading">Projects</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card border-secondary bg-dark" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h3 className="card-title">Base Converter</h3>
                            <p className="'card-text">
                                A tool to quickly convert numbers to different bases such as binary or hexadecimal. Utilized Android SDK using Java.
                            </p>
                        </div>
                    </div>
                    <div className="card border-secondary bg-dark" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h3 className="card-title">QuickClips</h3>
                            <p className="'card-text">
                                A tool to quickly convert numbers to different bases such as binary or hexadecimal. This app was built on Android using Java.
                            </p>
                        </div>
                    </div>
                    <div className="card border-secondary bg-dark" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h3 className="card-title">College Navigator</h3>
                            <p className="'card-text">
                                An app built on Android using Java to help find the colleges and that will accept you into their school based on your SAT score.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsContainer;