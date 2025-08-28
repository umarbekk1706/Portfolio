import styles from "./about.module.css";
function About() {
  return (
    <div>

      <main className={styles.about} id="about">
        <div className={styles.container}>

        </div>
        <section className={styles.about_me}>
          <h1>About me</h1>
          <p>
            I’m a Frontend Developer with experience in creating responsive
            websites using HTML, CSS, JavaScript, and React.
          </p>
        </section>
        <section className={styles.info}>
          <h1>Info</h1>
          <p className={styles.text}>
            I’m a Frontend Developer with a passion for creating responsive, user-friendly websites and applications.<br />
            My goal is to deliver high-quality, modern designs that not only look great but also perform flawlessly.
            <br /><br />
            <strong>What I offer:</strong><br />
            ✔️ Modern, clean, mobile-friendly designs<br />
            ✔️ Reusable React components &amp; SPA development<br />
            ✔️ Dynamic data integration with Fetch API<br />
            ✔️ Pixel-perfect implementation from Figma/PSD<br />
            ✔️ Clean, maintainable code using Git
            <br /><br />
            <strong>Why clients choose me:</strong><br />
            ✅ Clear communication &amp; timely delivery<br />
            ✅ Strong attention to detail<br />
            ✅ Focus on both aesthetics and functionality
          </p>
        </section>
        <section className={styles.skils}>
          <h1>Skils</h1>
          <div className={styles.skils_box}>
            <div className={styles.skils_card}>
              <i className="fa-brands fa-html5" id={styles.html}></i>
              <p><strong>HTML</strong></p>
            </div>
            <div className={styles.skils_card}>
              <i className="fa-brands fa-css3-alt" id={styles.css}></i>
              <p><strong>CSS</strong></p>
            </div>
            <div className={styles.skils_card}>
              <i className="fa-brands fa-square-js" id={styles.js}></i>
              <p><strong>Javascript</strong></p>
            </div>
            <div className={styles.skils_card}>
              <i className="fa-brands fa-react" id={styles.react}></i>
              <p><strong>React</strong></p>
            </div>
            <div className={styles.skils_card}>
              <i className="fa-brands fa-figma" ></i>
              <p><strong>Figma</strong></p>
            </div>
            <div className={styles.skils_card}>
              <i className="fa-brands fa-github" id={styles.git}></i>
              <p><strong>GitHub</strong></p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default About;