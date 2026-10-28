import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {sections, paths} from '../data/home';

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>Open · Structured · Community-maintained</p>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/library/start-here">
            Start here
          </Link>
          <Link className="button button--secondary button--lg" to="/library/start-here/learning-paths">
            Pick a learning path
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionGrid() {
  return (
    <section className={styles.block}>
      <div className="container">
        <h2 className={styles.blockTitle}>Browse the library</h2>
        <p className={styles.blockLead}>
          Twelve sections, ordered roughly from the bottom of the stack to the top. Every topic page
          follows the same layout: overview, key concepts, standards, resources by level and a
          hands-on lab.
        </p>
        <div className={styles.grid}>
          {sections.map((s) => (
            <Link key={s.slug} to={`/library/${s.slug}`} className={styles.card}>
              <span className={styles.cardNum}>{s.num}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Paths() {
  return (
    <section className={`${styles.block} ${styles.alt}`}>
      <div className="container">
        <h2 className={styles.blockTitle}>Learning paths</h2>
        <p className={styles.blockLead}>
          Curated sequences that cut across sections. Follow one end to end, or use it as a
          checklist.
        </p>
        <div className={styles.paths}>
          {paths.map((p) => (
            <Link key={p.slug} to={`/library/start-here/learning-paths/${p.slug}`} className={styles.path}>
              <span className={styles.pathLevel}>{p.level}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main>
        <SectionGrid />
        <Paths />
      </main>
    </Layout>
  );
}
