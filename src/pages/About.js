import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import data from '../data/baseData.json';
import { motion } from 'framer-motion';
import '../sass/pages/_about.scss';

const About = () => {
    const [dataState, setDataState] = useState([]);

    useEffect(() => {
        setDataState(data);
    }, [])

    const firstOne = Object.values(dataState).slice(0, 4)
    const secondOne = Object.values(dataState).slice(4, 8)
    const thirdOne = Object.values(dataState).slice(8, 12)

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0, translateX: -50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{
                duration: .3,
                ease: "easeInOut",
            }}
        >
            <Header />
            <main className='main-about'>
                <section className='about'>
                    <h1>about me</h1>
                    <p>Passionné par le développement web depuis plusieurs années, actuellement, je suis développeur web junior.
                        La formation que j'ai suivie auprès d'OpenClassrooms étant que développeur web m'a permis de développer des compétences en HTML, CSS, SASS, JS, REACT, NODEJS, EXPRESS, MONGODB ... .
                        Ce parcours auprès d'OC m'a aidé enfin à acquérir les bases essentielles et nécessaires pour progresser dans ce domaine.
                    </p>
                    <p>
                        Je suis un développeur web qui conçoit, développe, entretient des sites web et applications pour permettre aux entreprises de gagner en visibilité. Consultez mes projets et travaux dans la section Projets.
                        J’aime aussi partager du contenu lié aux choses que j’ai apprises dans le développement Web, afin qu’il puisse aider d’autres personnes de la communauté Dev. N’hésitez pas à me rejoindre sur Git où je poste du contenu utile lié au développement et à la programmation Web.
                        Je suis ouvert aux possibilités où je peux contribuer, apprendre et m'améliorer. Si vous avez une opportunité  qui correspond à mes compétences et à mon expérience, n’hésitez pas à me contacter.
                    </p>
                </section>
                <section className='section-skills'>
                    <h2>my skills</h2>
                    <div className="cards">
                        <div className="first--cards">
                            {
                                firstOne.map(({ title, id, rating }) => (
                                    <Cards key={id} title={title} rating={rating} />
                                ))
                            }
                        </div>
                        <div className="second--cards">
                            {
                                secondOne.map(({ title, id, rating }) => (
                                    <Cards key={id} title={title} rating={rating} />
                                ))
                            }
                        </div>
                        <div className="third--cards">
                            {
                                thirdOne.map(({ title, id, rating }) => (
                                    <Cards key={id} title={title} rating={rating} />
                                ))
                            }
                        </div>
                    </div>
                </section>
                <div className="presentation">
                    <p className='name'>Sina S. KABUYA</p>
                    <p>Développeur web junior frontend. Conception des sites web et des applications web</p>
                </div>
            </main>
            <Footer />
        </motion.div>
    )
}

export default About