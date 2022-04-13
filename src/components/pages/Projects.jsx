import Project from '../Project';
import '../styles/Projects.css';
import whistleImg from '../assets/whistle-project.png';
import easybankImg from '../assets/Easybank-project.png';
import saleswhaleImg from '../assets/react-saleswhale.png';
import nxtmovieImg from '../assets/nxt-movie-project.png';

const Projects = () => {
  return (
    <div className="container">
      <h1>Projects</h1>
      <Project
        imgSrc={whistleImg}
        title="Whistle Task Manager"
        liveLink="https://limitless-plateau-15055.herokuapp.com/"
        githubLink="https://github.com/AndreV96/project-2"
        description="This is a project management system. It allows you to create new users, login/logout, create/delete projects and tasks within the projects. Technologies used: SASS, Node.js, Express.js, Heroku, and GSAP (for animations)"
      />
      <Project
        imgSrc={easybankImg}
        title="Easybank Project"
        liveLink="https://easybank-ig.netlify.app/"
        githubLink="https://github.com/isaacgalvan10/react-easybank"
        description="This is a front end challenge from frontendmentor.io. I built this using React, SASS, and GSAP."
      />
      <Project
        imgSrc={saleswhaleImg}
        title="Saleswhale Project"
        liveLink="https://react-saleswhale-isaacg.netlify.app/"
        githubLink="https://github.com/isaacgalvan10/React-Saleswhale"
        description="This is a front end challenge from frontendmentor.io. I built this using React, SASS, and GSAP."
      />
      <Project
        imgSrc={nxtmovieImg}
        title="NXT Movie Project"
        liveLink="https://isaacgalvan10.github.io/nxt-movie/"
        githubLink="https://github.com/isaacgalvan10/nxt-movie"
        description="This website solves the issue when you want to find a movie and see if its on a certain streaming platform. It was built with a team of 2 other people. It was built using Bulma, JS, and SASS."
      />
    </div>
  );
};

export default Projects;
