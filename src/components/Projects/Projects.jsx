import { useState } from 'react'
import styles from './Projects.module.css'
import appScreenshot from '../../assets/personal_project.png'

function ProjectModal({ project, onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        <div className={styles.modalHeader}>
          <div className={styles.modalTags}>
            {project.tags?.map((t) => <span key={t} className="chip chip-sm">{t}</span>)}
          </div>
          <h2>{project.title}</h2>
          <p className={styles.modalCompany}>{project.company}</p>
        </div>
        <ul className={styles.modalPoints}>
          {project.details?.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <div className={styles.techRow}>
          {project.tech?.map((t) => <span key={t} className={styles.techBadge}>{t}</span>)}
        </div>
      </div>
    </div>
  )
}

const personalProject = {
  title: 'ROM Downloader — PSP, PS2 & PC Games',
  tags: ['Flutter', 'Firebase', 'AdMob', 'Python'],
  summary: 'Download PSP ROMs, PS2 ROMs, and PC games directly from the app. 50K+ downloads on Play Store.',
  details: [
    'Browse and download PSP ROMs, PS2 ROMs, and PC games with direct download links.',
    'Firebase Firestore as the database — auto-updated by a Python scraper that pulls data from open sources.',
    'AdMob integrated for monetisation.',
    '50,000+ downloads on Google Play Store.',
  ],
  tech: ['Flutter', 'Dart', 'Firebase Firestore', 'Python', 'AdMob'],
  playStore: 'https://play.google.com/store/apps/details?id=com.adwaith.movieapp',
}

export default function Projects({ projects }) {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="panel panel-animate">
      <div className="section-heading">
        <p className="section-kicker">Projects</p>
        <h2>Selected Work</h2>
      </div>

      {/* ── Personal Project Highlight ── */}
      <div className={styles.featured}>
        <div className={styles.featuredContent}>
          <div className={styles.featuredMeta}>
            <span className={styles.featuredBadge}>Personal Project</span>
            <div className={styles.tags}>
              {personalProject.tags.map((t) => <span key={t} className="chip chip-sm">{t}</span>)}
            </div>
          </div>
          <h3 className={styles.featuredTitle}>{personalProject.title}</h3>
          <p className={styles.summary}>{personalProject.summary}</p>
          <ul className={styles.featuredPoints}>
            {personalProject.details.map((d) => <li key={d}>{d}</li>)}
          </ul>
          <div className={styles.featuredFooter}>
            <div className={styles.techRow}>
              {personalProject.tech.map((t) => <span key={t} className={styles.techBadge}>{t}</span>)}
            </div>
            <a className={styles.playStoreBtn} href={personalProject.playStore} target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 0 2.07-.22l12.1-7-3.37-3.37-10.8 10.59zm-1.1-20.7v17.88l9.83-8.94-9.83-8.94zm19.4 7.6-2.9-1.68-3.77 3.44 3.77 3.44 2.93-1.7a2 2 0 0 0 0-3.5zM5.25.46a2 2 0 0 0-2.07-.22L13.01 10.8l3.37-3.37L5.25.46z"/></svg>
              View on Play Store
            </a>
          </div>
        </div>
        <div className={styles.featuredImage}>
          <img src={appScreenshot} alt="ROM Downloader app screenshot" />
        </div>
      </div>

      <div className={styles.grid}>
        {projects?.map((project) => (
          <article key={project.id} className={styles.card} onClick={() => setSelected(project)}>
            <div className={styles.tags}>
              {project.tags?.slice(0, 2).map((t) => <span key={t} className="chip chip-sm">{t}</span>)}
            </div>
            <h3>{project.title}</h3>
            <p className={styles.company}>{project.company}</p>
            <p className={styles.summary}>{project.summary}</p>
            <span className={styles.cta}>View details →</span>
          </article>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
