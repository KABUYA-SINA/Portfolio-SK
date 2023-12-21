import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projects from '../data/basePojects';
import CardProjects from '../components/CardProjects';
import { motion } from 'framer-motion';
import '../sass/pages/_projets.scss';

const Projets = () => {
    const [proj, setProj] = useState([])

    useEffect(() => {
        setProj(projects)
    }, [])

    const data = Object.values(proj)

    return (
        <motion.div
            className='container'
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: .3,
                ease: "easeInOut",
                translateY: {
                    type: "spring",
                    damping: 9,
                    stiffness: 50,
                    restSpeed: 0.5,
                    restDelta: 0.001
                }
            }}
        >
            <Header />
            <main className='main-projets'>
                <h1>Projets</h1>
                <section className="section-projets">
                    {
                        data.map((el, index) => (
                            <CardProjects key={index} id={el.id} name={el.name}
                                cover={el.cover} alt={el.alt} comment={el.comment}
                                src={el.src} host={el.host} className={el.className}
                            />
                        ))
                    }
                </section>
            </main>
            <Footer />
        </motion.div>
    )
}

export default Projets