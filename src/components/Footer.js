import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '../sass/layout/_footer.scss';
import '../sass/base/_footer-typo.scss';


const Footer = () => {

    return (
        <footer className='foot'>
            <div className="footer-box">
                <Link to={'https://github.com/KABUYA-SINA'}
                    aria-label={"github"} className={'footer-link'}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGithub />
                </Link>
                <Link to={'https://linkedin.com/in/sina-sabrin'}
                    aria-label={"linkedin"} className={'footer-link'}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaLinkedin />
                </Link>
            </div>
            <p className='footer-p'>©2023 Kabuya Sina | All rights Reserved</p>
        </footer>
    )
}

export default Footer