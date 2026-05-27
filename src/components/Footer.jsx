import { socialLinks } from '../data/socialLinks';

export default function Footer() {

  // ========================
  // CURRENT YEAR DYNAMIC VALUE
  // ========================
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* ======================== */}
      {/* FOOTER MAIN CONTAINER */}
      {/* ======================== */}
      <div className="footer-two">
        <nav aria-label="Social media links">
          <ul className="footer-socials">

            {/* ======================== */}
            {/* SOCIAL LINKS MAPPING */}
            {/* ======================== */}
            {socialLinks.map(({ href, label, icon }) => (
              <li key={href}>

                {/* ======================== */}
                {/* SOCIAL LINK ITEM */}
                {/* ======================== */}
                <a
                  href={href}
                  aria-label={label}
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon}

                  {/* ======================== */}
                  {/* ACCESSIBILITY TEXT */}
                  {/* ======================== */}
                  <span className="sr-only">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ======================== */}
        {/* COPYRIGHT TEXT */}
        {/* ======================== */}
        <p className="footer-p">
          © {currentYear} - Sina Sabrin | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}