import styles from "./hero.module.css";
import portfolio_img from "../../../public/images/portfolio_img.jpg";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.hero_box}>
        <div className={styles.hero_text} >
          <h1>Hi, I’m Sardor</h1>
          <h2>Frontend Developer</h2>
          <p>I build websites using HTML, CSS, JavaScript, and React. My websites are responsive and work with API</p>
        </div>
          <img src={portfolio_img} alt="portfolio img"  className={styles.hero_img}/>
        </div>
         
     

    </section>
  )
}

export default Hero;