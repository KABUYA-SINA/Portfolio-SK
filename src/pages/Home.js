import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import IsTyping from '../components/IsTyping';
import '../sass/base/_base.scss';
import '../sass/base/_font.scss';
import '../sass/layout/_container.scss';
import '../sass/pages/_home.scss';

const Home = () => {
    debugger;
    return (
        <motion.div
            className='container'
            key="modal"
            initial={{ opacity: 0, translateY: -50 }}
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
            }
            }
            exit={{ opacity: 0, translateY: 0 }}
        >
            <Header />
            <main className='main-home'>
                <div className="heading">
                    <h1>K.S</h1>
                </div>
                <IsTyping />
            </main>
            <Footer />
        </motion.div>
    )
}

export default Home