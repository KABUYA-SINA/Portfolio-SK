import Cards from '../components/projects/CardProjects';
import projets from '../data/projets';

export default function Projets() {

  return (
    <>
      <h2 className="projects-title">
        REALISATIONS
      </h2>

      {/* ======================== */}
      {/* PROJECTS GRID SECTION */}
      {/* ======================== */}
      <section
        className="section-projets"
        aria-label="Projects list"
      >

        {/* ======================== */}
        {/* PROJECTS MAPPING */}
        {/* ======================== */}
        {projets.map((el) => (
          <Cards
            key={el.id}
            id={el.id}
            name={el.name}
            cover={el.cover}
            alt={el.alt}
            comment={el.comment}
            src={el.src}
            host={el.host}
            className={el.className}
          />
        ))}
      </section>
    </>
  );
}