import styles from "./hero.module.css";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.hero_box}>
        <div className={styles.hero_text} >
          <h1>Hi, I’m Sardor</h1>
          <h2>Frontend Developer</h2>
          <p>I build websites using HTML, CSS, JavaScript, and React. My websites are responsive and work with API</p>
        </div>
          <h1 className={styles.hero_img}>👨🏻‍💻</h1>
        </div>
         
     

    </section>
  )
}

export default Hero;