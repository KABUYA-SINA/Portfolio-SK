const CardProjects = ({
  comment,
  cover,
  name,
  src,
  host,
  className,
}) => {

  return (
    <article className="card-projets">
      <div className="card-inner">

        {/* ======================== */}
        {/* FRONT SIDE */}
        {/* ======================== */}
        <div
          className="card-f"
          style={{ backgroundImage: `url(${cover})` }}
          role="img"
          aria-label={name}
        >
          <div className="card-txt">
            <h3 className="name-projet">
              {name}
            </h3>
            <p>
              {comment}
            </p>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Learn more about ${name}`}
              className="project-link"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* ======================== */}
        {/* BACK SIDE */}
        {/* ======================== */}
        <div className="card-b">

          {/* ======================== */}
          {/* HOST INFORMATION */}
          {/* ======================== */}
          <span className={className}>
            {host}
          </span>

          {/* ======================== */}
          {/* PROJECT NAME */}
          {/* ======================== */}
          <h3 className="name-projet">
            {name}
          </h3>
        </div>
      </div>
    </article>
  );
};

export default CardProjects;