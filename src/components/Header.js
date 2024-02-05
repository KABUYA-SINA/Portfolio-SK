import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import icon from '../assets/icon.png';
import { GrProjects } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import '../sass/base/_header-typo.scss';
import '../sass/layout/_header.scss';

const Header = () => {

    const history = useLocation()
    function NameLocation() {
        const a = history.pathname.slice(1, history.pathname.length)
        let b = a.charAt(0).toUpperCase() + a.slice(1);
        if (b === "") {
            return "Portfolio"
        } else {
            return b
        }
    }

    return (
        <header className='head'>
            <Link to={'/'} className='logo'>
                <img src={icon} alt="icon kab's" />
            </Link>
            <motion.nav
                className="nav-link"
            >
                <h1>{NameLocation()}</h1>
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