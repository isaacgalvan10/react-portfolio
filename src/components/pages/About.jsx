import '../styles/About.css';

const About = () => {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="card">
        <p className="card__content--50">
          I'm Isaac Galvan. I am a Frontend web developer leveraging wordpress
          development experience to build a more intuitive user experience on
          the web. Recently earned a certificate in full stack development from
          Instituto Tecnológico y de Estudios Superiores de Monterrey, with
          skills in front end and back end technologies like: JavaScript, CSS,
          React.js, node.js, express.js, MySQL, and more. Known as an innovative
          problem solver passionate about developing applications, with a focus
          on mobile-first design and development. With each project, my aim is
          to best engage my audience for an impactful user experience. I apply
          aspects of UX and agile development in my recent projects. I’m excited
          to leverage my skills to be a part of a fast-paced, quality-driven
          team to build better experiences on the web.
        </p>
        <div className="card__content__container">
          <h2>Skills</h2>
          <div className="skill__container">
            <div className="skill">
              <i class="fa-brands fa-js-square"></i>
              <p>Javascript</p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-react"></i>
              <p>React</p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-sass"></i>
              <p>SASS</p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-wordpress"></i>
              <p>Wordpress</p>
            </div>
            <div className="skill">
              <i class="fa-brands fa-node"></i>
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
