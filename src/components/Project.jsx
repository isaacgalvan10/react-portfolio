const Project = () => {
  return (
    <div className="card">
      <div className="card__img__container">
        <img
          src={require('./assets/whistle-project.png')}
          alt="Whistle project"
          className="card__img"
        />
      </div>
      <div className="card__content__container">
        <h2 className="card__title">Whistle Task Manager</h2>
        <div className="card__btn__container">
          <button className="card__btn">Live</button>
          <button className="card__btn">Github</button>
        </div>
        <p>
          This is a project management system. It allows you to create new
          users, login/logout, create/delete projects and tasks within the
          projects. Technologies used: SASS, Node.js, Express.js, Heroku, and
          GSAP (for animations)
        </p>
      </div>
    </div>
  );
};

export default Project;
