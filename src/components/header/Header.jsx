import { Link } from "react-scroll";
import styles from "./header.module.css";
import { useState } from "react";

function Header() {
        const [menuOpen, setMenuOpen] = useState(false);
 const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); 
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
         <h1 className={styles.logo}>Portfolio</h1>
       <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)} 
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header;