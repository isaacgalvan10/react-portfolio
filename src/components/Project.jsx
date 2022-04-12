const Project = (props) => {
  return (
    <div className="card">
      <div className="card__img__container">
        <a href={props.liveLink} target={'_blank'} rel="noreferrer">
          <img src={props.imgSrc} alt={props.title} className="card__img" />
        </a>
      </div>
      <div className="card__content__container">
        <h2 className="card__title">{props.title}</h2>
        <div className="card__btn__container">
          <a href={props.liveLink} target={'_blank'} rel="noreferrer">
            <button className="card__btn">Live</button>
          </a>
          <a href={props.githubLink} target={'_blank'} rel="noreferrer">
            <button className="card__btn">Github</button>
          </a>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Project;
