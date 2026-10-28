import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import {HOME} from '../data/home';

// Homepage text and cards for each language live in src/data/home.js.
function useHome() {
  const {i18n} = useDocusaurusContext();
  return HOME[i18n.currentLocale] ?? HOME.en;
}

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  const {ui} = useHome();
  return (
    <header className={styles.hero}>
      <div className="container">
        <p className={styles.eyebrow}>{ui.eyebrow}</p>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.actions}>
          <Link className="button button--primary button--lg" to="/library/start-here">
            {ui.start}
          </Link>
          <Link className="button button--secondary button--lg" to="/library/start-here/learning-paths">
            {ui.paths}
          </Link>
          <Link className="button button--secondary button--lg" to="/library/reference/certifications">
            {ui.certs}
          </Link>
        </div>
      </div>
    </header>
  );
}

function SectionGrid() {
  const {ui, sections, topicCount} = useHome();
  return (
    <section className={styles.block}>
      <div className="container">
        <h2 className={styles.blockTitle}>{ui.browse}</h2>
        <p className={styles.blockLead}>{ui.browseLead.replace('{count}', topicCount)}</p>
        <div className={styles.grid}>
          {sections.map((s) => (
            <Link key={s.slug} to={`/library/${s.slug}`} className={styles.card}>
              <span className={styles.cardNum}>{s.num}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.blurb}</p>
              {s.count > 0 && (
                <p className={styles.cardCount}>{ui.topics.replace('{count}', s.count)}</p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Paths() {
  const {ui, paths} = useHome();
  return (
    <section className={`${styles.block} ${styles.alt}`}>
      <div className="container">
        <h2 className={styles.blockTitle}>{ui.pathsTitle}</h2>
        <p className={styles.blockLead}>{ui.pathsLead}</p>
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
  const {ui} = useHome();
  return (
    <Layout title={ui.home} description={siteConfig.tagline}>
      <Hero />
      <main>
        <SectionGrid />
        <Paths />
      </main>
    </Layout>
  );
}
