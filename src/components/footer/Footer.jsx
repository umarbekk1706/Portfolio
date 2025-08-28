import { Link } from "react-scroll";
import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h1 className={styles.logo}>Portfolio</h1>
                <ul className={styles.links}>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>

            </div>
            <div className={styles.copy}>
                © {new Date().getFullYear()} Sardor Dev.
            </div>
        </footer>
    )
}

export default Footer;