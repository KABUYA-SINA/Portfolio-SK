import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../sass/base/_header-typo.scss';
import '../sass/layout/_header.scss';

const Header = () => {
    function translate3d() {
        return `translate3d(10px, 10px, 0) scale(1) rotate(90deg)`
    }
    return (
        <header className='head'>
            <Link to={'/'}>
                <h1>Sina. k</h1>
            </Link>
            <motion.nav
                className="nav-link"
                transformTemplate={translate3d}
            >
                <NavLink to={'/projets'}
                    className={(nav) => (nav.isActive ? 'nav-active header-link' : 'header-link')}>
                    <span
                        className='projets'
                    >projets
                    </span>
                </NavLink>
            </motion.nav>
        </header>
    )
}

export default Header