import styles from "./projectCard.module.css";


function ProjectCard({  title, description, link, tags = [], image ,info }) {
  return (
    <article className={styles.card}>
       {image && (
        <div className={styles.media}>
          <img src={image} alt={`${title} preview`} />
        </div>
      )}
     <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.info}>{info}</p>

        {!!tags.length && (
          <div className={styles.meta}>
            {tags.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <div className={styles.left}>
          <span className={styles.stats}>⭐ Demo</span>
        </div>
        <a className={styles.button} href={link} target="_blank" rel="noreferrer">
          View
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
