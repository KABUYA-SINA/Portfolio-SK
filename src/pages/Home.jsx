import { NavLink } from 'react-router-dom';
import { IoIosArrowDropright } from "react-icons/io";

export default function Home() {
  return (
    <>
      <section className="sec-h_f">
        <p>
          Passionné par la conception, le développement, la modélisation et la
          création, je suis attentif à la qualité du code, aux performances et à
          l'expérience utilisateur.
        </p>
        <a
          href="https://github.com/KABUYA-SINA"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          aria-label="Visit GitHub profile"
        >
          View Github
        </a>
      </section>
      <section className="sec-h_t">
        <h2>PORTFOLIO - SINA SABRIN - KABUYA</h2>
        <div className="sec-h-txt">
          <div className="arrow-drp">
            <IoIosArrowDropright aria-hidden="true" />
            <h3>Ambitieux</h3>
          </div>
          <p>
            Désireux d'apprendre, de progresser et de relever de nouveaux défis,
            je m'investis dans des projets où je peux apporter des solutions
            fiables, innovantes et efficaces.
          </p>
        </div>
        <span className="sk">
          <NavLink to="/about" className="btn-name">
            SK
          </NavLink>
        </span>
      </section>
    </>
  );
}