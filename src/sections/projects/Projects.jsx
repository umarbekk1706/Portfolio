import styles from "./projects.module.css";
import ProjectCard from "../../components/projectCard/ProjectCard";
function Projects() {
  return (
    <div >

          <section className={`${styles.projects} container`} id="projects">
      <h2 className={styles.heading}>My projects</h2>

      <div className={styles.grid}>
        <ProjectCard 
         image="/images/Future_Study.png"
          title="Future-Study" 
          description="Online course"
          info="Discover our online learning platform, where you can easily register, complete interactive tests, and earn certificates to showcase your skills. Fully responsive and user-friendly, our website works seamlessly on computers, tablets, and smartphones, allowing you to learn anytime, anywhere." 
          link="https://future-study.vercel.app/" 
        />
        <ProjectCard 
         image="/images/Eco_Bazar.png"
          title="Eco-bazar" 
          description="Online market" 
          info="Discover EcoBazar, your trusted online marketplace where you can easily explore eco-friendly products, shop with secure payments, and enjoy fast delivery. Fully responsive and user-friendly, our website works seamlessly on computers, tablets, and smartphones, making shopping simple and convenient anytime, anywhere." 
          link="https://eco-bazar-kohl.vercel.app/" 
        />
      </div>
    </section>
      </div>
  )
}

export default Projects;