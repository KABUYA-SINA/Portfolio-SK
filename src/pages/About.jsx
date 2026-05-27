import { lazy, Suspense } from 'react';

const Skills = lazy(() => import('../components/Skills'));

export default function About() {

  return (
    <>
      <h2 className="about-title">ABOUT</h2>
      <section className="about-txt" aria-label="About description">
        <ol>
          <li>
            Au départ, il s'agissait surtout de comprendre le fonctionnement des interfaces, comment une donnée circule, comment un clic déclenche une logique côté serveur. Peu à peu, cette approche est devenue une manière de travailler : concevoir un projet comme un ensemble cohérent plutôt qu'une addition de fonctionnalités.
          </li>
          <li>
            Côté front-end, je conçois des interfaces avec HTML, CSS, SASS et JavaScript, en cherchant un équilibre entre clarté visuelle et logique d'utilisation. React m'a permis d'aller plus loin dans cette approche, notamment à travers des composants réutilisables et une meilleure organisation de l'interface.
          </li>
          <li>
            Sur la partie back-end, je développe des API avec Node.js et Express, en privilégiant des architectures propres et évolutives. Je fais attention à la lisibilité du code, à la gestion des routes, aux middlewares et à la sécurité, afin de construire des applications fiables et maintenables.
          </li>
          <li>
            Je travaille également avec MongoDB et des bases SQL selon les besoins du projet, en adaptant la structure des données à la logique du produit. L'objectif reste toujours le même : garder une cohérence entre les données, le back-end et l'expérience utilisateur.
          </li>
          <li>
            En parallèle, j'élargis progressivement mes compétences vers Python, Flask, Redux, l'intelligence artificielle, la data et le développement mobile avec React Native et Expo, avec la même logique : comprendre les outils et les modèles avant de les empiler.
          </li>
          <li>
            Au-delà des technologies, je fais attention à la qualité globale d'un projet : organisation du code, lisibilité, et capacité à être maintenu ou repris par d'autres. Git et GitHub font naturellement partie de mon quotidien pour structurer ce travail et collaborer efficacement.
          </li>
        </ol>
      </section>
      <section className="skills-s" aria-label="Skills section">
        <Suspense fallback={<div className="load-about">Loading skills...</div>}>
          <Skills />
        </Suspense>
      </section>
    </>
  );
}