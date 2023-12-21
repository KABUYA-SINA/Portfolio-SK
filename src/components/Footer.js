import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../sass/layout/_footer.scss';
import '../sass/base/_footer-typo.scss';


const Footer = () => {
    function translate3d() {
        return `translate3d(-15px, -32px, 0) scale(1) rotate(270deg)`
    }
    function translated3bAbout() {
        return `translate3d(4px, -25px, 0) scale(1) rotate(90deg)`
    }
    return (
        <footer className='foot'>
            <motion.div
                className="footer-box"
                transformTemplate={translate3d}
            >
                <NavLink
                    to="/contact"
                    className={(nav) => (nav.isActive ? 'nav-active footer-link' : 'footer-link')}
                >
                    <span className='footer-span'>
                        contact
                    </span>
                </NavLink>
            </motion.div>
            <motion.div
                className='footer-box'
                transformTemplate={translated3bAbout}
            >
                <NavLink to={'/about'}
                    className={(nav) => (nav.isActive ? 'nav-active footer-link' : 'footer-link')}
                >
                    <span className='footer-span'>about</span>
                </NavLink>
            </motion.div>
        </footer>
    )
}

export default Footer