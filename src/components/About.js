import { motion } from 'framer-motion'
import Loader from './Loader'
import ErrorData from '../page/ErrorData'
import { useState, useEffect } from 'react'
import Skills from '../datas/ideas'
import { ErrorBoundary } from 'react-error-boundary';
import '../sass/pages/_about.scss'



function About () {

    const[skills, setSkills] = useState(Skills)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
    }, 1800);
    }, []);

    if(!skills) return <ErrorData />


    return (
        <div className="about">
            <div className='about-mainText'>
                <h2 id='/#about'>A propos de moi</h2>
                <p>Passionné par le développement web depuis plusieurs années, actuellement, je suis développeur web junior.
                La formation que j'ai suivie auprès d'OpenClassrooms étant que développeur web m'a permis de développer des compétences en HTML, CSS, SASS, JS, REACT, NODEJS, EXPRESS, MONGODB ... . 
                Ce parcours auprès d'OC m'a aidé enfin à acquérir les bases essentielles et nécessaires pour progresser dans ce domaine.</p>
            </div>
           <div className='about_next'>
                <h2>Apprendre un plus sur moi !</h2>
                <p>
                    Je suis un développeur web qui conçoit, développe, entretient des sites web et applications pour permettre aux entreprises de gagner en visibilité. Consultez mes projets et travaux dans la section Projets.
                    J’aime aussi partager du contenu lié aux choses que j’ai apprises dans le développement Web, afin qu’il puisse aider d’autres personnes de la communauté Dev. N’hésitez pas à me rejoindre sur Git où je poste du contenu utile lié au développement et à la programmation Web.
                    Je suis ouvert aux possibilités où je peux contribuer, apprendre et m'améliorer. Si vous avez une opportunité  qui correspond à mes compétences et à mon expérience, n’hésitez pas à me contacter.
                </p>
           </div>
           <div className='skills'>
                <h2>Skills</h2>
                <article>
                    <ErrorBoundary FallbackComponent={ErrorData} onReset={() => {}}>
                        {isLoading ?
                            (<Loader data-testid="loader"/>)
                            :
                            (<ol>
                                {skills.map((skill, index) => (
                                    <motion.li className='childs' key={`${skill.id}-${index}`} drag='x' dragConstraints={{left: 5, right: 5}} title='Move me if you can'>{skill.title}</motion.li>
                                ))}
                            </ol>)
                        }
                    </ErrorBoundary>
                </article>
           </div>
        </div>
    );
};

export default About;