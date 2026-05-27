import { NavLink } from 'react-router-dom';
import { MdContactPhone } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

export default function Header() {

  // ========================
  // NAV LINK ACTIVE CLASS HANDLER
  // ========================
  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? 'nav-active header-link'
      : 'header-link';

  // ========================
  // NAVIGATION LINKS DATA
  // ========================
  const navLinks = [

    {
      path: '/projets',
      label: 'Projects',
      icon: <GrProjects aria-hidden="true" />,
      itemClass: 'projects',
    },
    {
      path: '/about',
      label: 'About me',
      icon: <FaBookReader aria-hidden="true" />,
      itemClass: 'about',
    },
    {
      path: '/contact',
      label: 'Contact',
      icon: <MdContactPhone aria-hidden="true" />,
      itemClass: 'contact',
    },
  ];

  return (
    <header className="header">

      {/* ======================== */}
      {/* LOGO SECTION */}
      {/* ======================== */}
      <div className="logo">
        <NavLink to="/" aria-label="Go to home page">
          <h1>SK</h1>
        </NavLink>
      </div>

      {/* ======================== */}
      {/* MAIN NAVIGATION */}
      {/* ======================== */}
      <nav className="navigation" aria-label="Main navigation">
        <ul className="menu">

          {/* ======================== */}
          {/* NAV LINKS MAPPING */}
          {/* ======================== */}
          {navLinks.map(({ path, label, icon, itemClass }) => (
            <li key={path} className={itemClass}>

              {/* ======================== */}
              {/* NAV LINK ITEM */}
              {/* ======================== */}
              <NavLink
                to={path}
                aria-label={label}
                className={getNavLinkClass}
              >
                {icon}

                {/* ======================== */}
                {/* ACCESSIBILITY LABEL */}
                {/* ======================== */}
                <span className="sr-only">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}