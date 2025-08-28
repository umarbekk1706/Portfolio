import styles from "./contact.module.css"

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h1>Contact me</h1>

      <h2>Let’s Work Together: You can write to me using the form below or contact me directly via email</h2>
      <div className={styles.contact_form}>
        <h3>Contact with me</h3>
        <div className={styles.links}>
          <p><a href="https://mail.google.com/mail/u/0/#inbox" target="blank" rel="noopener noreferrer"><i className="fa-solid fa-envelope"></i>Email</a></p>
          <p><a href="https://github.com/umarbekk1706" target="blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i>GitHub</a></p>
        </div>
      </div>
    </section>
  )
}

export default Contact;