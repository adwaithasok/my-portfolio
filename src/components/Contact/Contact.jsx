import styles from './Contact.module.css'

const contactDetails = [
  { label: 'Email', value: 'adwaithdeva@gmail.com', href: 'mailto:adwaithdeva@gmail.com', icon: '✉️' },
  { label: 'Phone', value: '+91 9746543460', href: 'tel:+919746543460', icon: '📞' },
  { label: 'LinkedIn', value: 'linkedin.com/in/adwaithasok', href: 'https://linkedin.com/in/adwaithasok', icon: '💼' },
  { label: 'Location', value: 'Bangalore, India', href: null, icon: '📍' },
]

export default function Contact() {
  return (
    <section id="contact" className="panel panel-animate">
      <div className={styles.top}>
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className={styles.heading}>Let&apos;s Talk</h2>
          <p className={styles.intro}>Open to new opportunities, collaborations, or just a chat.</p>
        </div>
        <a className={styles.mailBtn} href="mailto:adwaithdeva@gmail.com">
          Say Hello →
        </a>
      </div>

      <div className={styles.grid}>
        {contactDetails.map(({ icon, label, value, href }) => (
          <div key={label} className={styles.card}>
            <span className={styles.icon}>{icon}</span>
            <p className={styles.cardLabel}>{label}</p>
            {href
              ? <a className={styles.cardValue} href={href} target="_blank" rel="noreferrer">{value}</a>
              : <p className={styles.cardValue}>{value}</p>
            }
          </div>
        ))}
      </div>
    </section>
  )
}
