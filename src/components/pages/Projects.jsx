import Project from '../Project';
import '../styles/Projects.css';
import whistleImg from '../assets/whistle-project.png';

const Projects = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <Project
        imgSrc={whistleImg}
        title="Whistle Task Manager"
        liveLink="#"
        githubLink="#"
        description="lorem"
      />
    </div>
  );
};

export default Projects;
