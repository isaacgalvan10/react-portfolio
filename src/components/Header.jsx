import './styles/Header.css';
const Header = ({ currentPage, handlePageChange }) => {
  return (
    <div className="wrapper nav__bg">
      <nav className="container">
        <a
          className="nav__item logo"
          href="#about"
          onClick={() => handlePageChange('About')}
        >
          Isaac Galvan
        </a>
        <ul className="nav__list">
          <li className="nav__item">
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vTSqdXaA-SpRSaIRXjdIOSlYNIO3BRBkmJpgAz2p0S8yf3EzV-xGsM3GqK8vbrb_npfASWkNyr5REML/pub"
              target={'_blank'}
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li
            className={
              currentPage === 'About'
                ? 'nav__item nav__item--active'
                : 'nav__item'
            }
          >
            <a href="#about" onClick={() => handlePageChange('About')}>
              About
            </a>
          </li>
          <li
            className={
              currentPage === 'Projects'
                ? 'nav__item nav__item--active'
                : 'nav__item'
            }
          >
            <a href="#projects" onClick={() => handlePageChange('Projects')}>
              Projects
            </a>
          </li>
          <li
            className={
              currentPage === 'Contact'
                ? 'nav__item nav__item--active'
                : 'nav__item'
            }
          >
            <a href="#contact" onClick={() => handlePageChange('Contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
