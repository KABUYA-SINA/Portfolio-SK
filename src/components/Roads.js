import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Projets from '../pages/Projets';
import About from '../pages/About';

const Roads = () => {
    return (
        <AnimatePresence >
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/Portfolio-SK" element={<Home />} />
                <Route path='/projets' element={<Projets />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Roads;