import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import icon from '../assets/icon.png';
import { GrProjects } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import '../sass/base/_header-typo.scss';
import '../sass/layout/_header.scss';

const Header = () => {

    return (
        <header className='head'>
            <Link to={'/'} className='logo'>
                <img src={icon} alt="icon kab's" />
                <h1>Portfolio</h1>
            </Link>
            <motion.nav
                className="nav-link"
            >
                <NavLink to={'/projets'}
                    aria-label={"projets"}
                    className={(nav) => (nav.isActive ? 'nav-active header-link' : 'header-link')}>
                    <span className='projets projet' ><GrProjects /></span>
                </NavLink>
                <NavLink to={'/about'}
                    aria-label={"about"}
                    className={(nav) => (nav.isActive ? 'nav-active header-link' : 'header-link')}
                >
                    <span className='projets about'><SiAboutdotme /></span>
                </NavLink>
                <NavLink to={"/contact"}
                    aria-label={"contact"}
                    className={(nav) => (nav.isActive ? 'nav-active header-link' : 'header-link')}
                >
                    <span className='projets contact'>
                        <MdOutlineConnectWithoutContact />
                    </span>
                </NavLink>
            </motion.nav>
        </header>
    )
}

export default Header