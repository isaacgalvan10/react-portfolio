import '../styles/About.css';

const About = () => {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="card2">
        <div className="card-container">
          <p className="card-content-left">
            I'm Isaac Galvan. I am a Frontend web developer leveraging wordpress
            development experience to build a more intuitive user experience on
            the web. Recently earned a certificate in full stack development
            from Instituto Tecnológico y de Estudios Superiores de Monterrey,
            with skills in front end and back end technologies like: JavaScript,
            CSS, React.js, node.js, express.js, MySQL, and more. Known as an
            innovative problem solver passionate about developing applications,
            with a focus on mobile-first design and development. With each
            project, my aim is to best engage my audience for an impactful user
            experience. I apply aspects of UX and agile development in my recent
            projects. I’m excited to leverage my skills to be a part of a
            fast-paced, quality-driven team to build better experiences on the
            web.
          </p>
          <div className="card-content-right">
            <h2>Technical Skills</h2>
            <div className="skill__container">
              <div className="skill">
                <i class="fa-brands fa-js-square" aria-label="Javascript"></i>
                <p>Javascript</p>
              </div>
              <div className="skill">
                <i class="fa-brands fa-react" aria-label="React"></i>
                <p>React</p>
              </div>
              <div className="skill">
                <i class="fa-brands fa-css3-alt" aria-label="CSS"></i>
                <p>CSS</p>
              </div>
              <div className="skill">
                <i class="fa-brands fa-sass" aria-label="SASS"></i>
                <p>SASS</p>
              </div>
              <div className="skill">
                <i class="fa-brands fa-html5" aria-label="HTML"></i>
                <p>HTML</p>
              </div>
              <div className="skill">
                <i class="fa-brands fa-wordpress" aria-label="Wordpress"></i>
                <p>Wordpress</p>
              </div>
              <div className="skill">
                <i class="fa-brands fa-node" aria-label="Node JS"></i>
                <p>Node JS</p>
              </div>
              <div className="skill">
                <i class="fa-brands fa-github-square" aria-label="Github"></i>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>

        <h2>Links</h2>
        <div className="social__container">
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vTSqdXaA-SpRSaIRXjdIOSlYNIO3BRBkmJpgAz2p0S8yf3EzV-xGsM3GqK8vbrb_npfASWkNyr5REML/pub"
            target={'_blank'}
            rel="noreferrer"
          >
            <button className="card__btn">Resume</button>
          </a>
          <div>
            <a
              href="https://github.com/isaacgalvan10"
              target={'_blank'}
              rel="noreferrer"
            >
              <i class="fa-brands fa-github-square" aria-label="Github"></i>
            </a>
            <p>Github</p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/isaac-galvan-dev/"
              target={'_blank'}
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin" aria-label="Linkedin"></i>
            </a>
            <p>Linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
