import styles from './Contact.module.css'
import { useContactForm } from '../../hooks/useContactForm'

const contactDetails = [
  {  label: 'Email', value: 'adwaithdeva@gmail.com', href: 'mailto:adwaithdeva@gmail.com' },
  {  label: 'Phone', value: '+91 9746543460', href: 'tel:+919746543460' },
  {  label: 'LinkedIn', value: 'adwaithasok', href: 'https://linkedin.com/in/adwaithasok' },
  {  label: 'Location', value: 'Bangalore, India', href: null },
]

export default function Contact() {
  const { formData, status, handleChange, handleSubmit } = useContactForm()

  return (
    <section id="contact" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Let&apos;s Talk</h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.details}>
          <p className={styles.detailsIntro}>
            Feel free to reach out — I&apos;m open to new opportunities, collaborations, or just a chat.
          </p>
          <div className={styles.detailsList}>
            {contactDetails.map(({ icon, label, value, href }) => (
              <div key={label} className={styles.detailItem}>
                <span className={styles.detailIcon}>{icon}</span>
                <div>
                  <p className={styles.detailLabel}>{label}</p>
                  {href
                    ? <a className={styles.detailValue} href={href} target="_blank" rel="noreferrer">{value}</a>
                    : <p className={styles.detailValue}>{value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </label>
          <button className="btn-primary" type="submit">Send Message</button>
          {status && <p className={styles.status} aria-live="polite">{status}</p>}
        </form> */}
      </div>
    </section>
  )
}
